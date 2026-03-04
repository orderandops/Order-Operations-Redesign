import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPageViewSchema, insertClickEventSchema } from "@shared/schema";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "orderandops2024";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/track/pageview", async (req, res) => {
    try {
      const ip =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress ||
        "unknown";

      const data = {
        ...req.body,
        ipAddress: ip,
        userAgent: req.headers["user-agent"] || null,
      };

      const parsed = insertPageViewSchema.safeParse(data);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid data" });
      }

      const result = await storage.insertPageView(parsed.data);
      return res.json({ id: result.id });
    } catch (err) {
      console.error("Track pageview error:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  app.post("/api/track/click", async (req, res) => {
    try {
      const parsed = insertClickEventSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid data" });
      }

      const result = await storage.insertClickEvent(parsed.data);
      return res.json({ id: result.id });
    } catch (err) {
      console.error("Track click error:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  app.post("/api/track/duration", async (req, res) => {
    try {
      const { sessionId, page, duration } = req.body;
      if (!sessionId || !page || duration === undefined) {
        return res.status(400).json({ error: "Missing fields" });
      }

      const ip =
        (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
        req.socket.remoteAddress ||
        "unknown";

      await storage.insertPageView({
        sessionId,
        page,
        duration: Math.round(duration),
        ipAddress: ip,
        userAgent: req.headers["user-agent"] || null,
        referrer: null,
        country: null,
        city: null,
        region: null,
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Track duration error:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  app.post("/api/admin/login", async (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      return res.json({ token: "authenticated", success: true });
    }
    return res.status(401).json({ error: "Invalid password" });
  });

  app.get("/api/admin/analytics", async (req, res) => {
    try {
      const auth = req.headers.authorization;
      if (!auth || auth !== `Bearer authenticated`) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const days = parseInt(req.query.days as string) || 30;
      const summary = await storage.getAnalyticsSummary(days);
      return res.json(summary);
    } catch (err) {
      console.error("Analytics error:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  app.get("/api/admin/pageviews", async (req, res) => {
    try {
      const auth = req.headers.authorization;
      if (!auth || auth !== `Bearer authenticated`) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const limit = parseInt(req.query.limit as string) || 100;
      const offset = parseInt(req.query.offset as string) || 0;
      const views = await storage.getPageViews(limit, offset);
      return res.json(views);
    } catch (err) {
      console.error("Pageviews error:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  app.get("/api/admin/clicks", async (req, res) => {
    try {
      const auth = req.headers.authorization;
      if (!auth || auth !== `Bearer authenticated`) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const limit = parseInt(req.query.limit as string) || 100;
      const offset = parseInt(req.query.offset as string) || 0;
      const clicks = await storage.getClickEvents(limit, offset);
      return res.json(clicks);
    } catch (err) {
      console.error("Clicks error:", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  app.get("/api/geo/:ip", async (req, res) => {
    try {
      const response = await fetch(`http://ip-api.com/json/${req.params.ip}?fields=country,regionName,city`);
      const data = await response.json();
      return res.json(data);
    } catch {
      return res.json({ country: "Unknown", regionName: "Unknown", city: "Unknown" });
    }
  });

  return httpServer;
}
