import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const pageViews = pgTable("page_views", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  page: text("page").notNull(),
  referrer: text("referrer"),
  userAgent: text("user_agent"),
  ipAddress: text("ip_address"),
  country: text("country"),
  city: text("city"),
  region: text("region"),
  duration: integer("duration"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const clickEvents = pgTable("click_events", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  page: text("page").notNull(),
  elementId: text("element_id"),
  elementText: text("element_text"),
  href: text("href"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertPageViewSchema = createInsertSchema(pageViews).omit({
  id: true,
  timestamp: true,
});

export const insertClickEventSchema = createInsertSchema(clickEvents).omit({
  id: true,
  timestamp: true,
});

export type InsertPageView = z.infer<typeof insertPageViewSchema>;
export type PageView = typeof pageViews.$inferSelect;
export type InsertClickEvent = z.infer<typeof insertClickEventSchema>;
export type ClickEvent = typeof clickEvents.$inferSelect;
