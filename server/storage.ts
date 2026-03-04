import {
  type User,
  type InsertUser,
  type InsertPageView,
  type PageView,
  type InsertClickEvent,
  type ClickEvent,
  users,
  pageViews,
  clickEvents,
} from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import { desc, sql, gte, count } from "drizzle-orm";
import pg from "pg";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  insertPageView(pv: InsertPageView): Promise<PageView>;
  insertClickEvent(ce: InsertClickEvent): Promise<ClickEvent>;
  getPageViews(limit?: number, offset?: number): Promise<PageView[]>;
  getClickEvents(limit?: number, offset?: number): Promise<ClickEvent[]>;
  getAnalyticsSummary(days?: number): Promise<{
    totalPageViews: number;
    uniqueVisitors: number;
    totalClicks: number;
    avgDuration: number;
    topPages: { page: string; views: number }[];
    topReferrers: { referrer: string; count: number }[];
    topLocations: { country: string; city: string; count: number }[];
    recentVisitors: PageView[];
    clicksByElement: { elementText: string; href: string | null; count: number }[];
    viewsByDay: { date: string; views: number }[];
  }>;
}

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(sql`${users.id} = ${id}`).limit(1);
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(sql`${users.username} = ${username}`).limit(1);
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async insertPageView(pv: InsertPageView): Promise<PageView> {
    const [result] = await db.insert(pageViews).values(pv).returning();
    return result;
  }

  async insertClickEvent(ce: InsertClickEvent): Promise<ClickEvent> {
    const [result] = await db.insert(clickEvents).values(ce).returning();
    return result;
  }

  async getPageViews(limit = 100, offset = 0): Promise<PageView[]> {
    return db.select().from(pageViews).orderBy(desc(pageViews.timestamp)).limit(limit).offset(offset);
  }

  async getClickEvents(limit = 100, offset = 0): Promise<ClickEvent[]> {
    return db.select().from(clickEvents).orderBy(desc(clickEvents.timestamp)).limit(limit).offset(offset);
  }

  async getAnalyticsSummary(days = 30) {
    const since = new Date();
    since.setDate(since.getDate() - days);

    const [totalPvResult] = await db
      .select({ count: count() })
      .from(pageViews)
      .where(gte(pageViews.timestamp, since));

    const [uniqueResult] = await db
      .select({ count: sql<number>`COUNT(DISTINCT ${pageViews.sessionId})` })
      .from(pageViews)
      .where(gte(pageViews.timestamp, since));

    const [totalClickResult] = await db
      .select({ count: count() })
      .from(clickEvents)
      .where(gte(clickEvents.timestamp, since));

    const [avgDurResult] = await db
      .select({ avg: sql<number>`COALESCE(AVG(${pageViews.duration}), 0)` })
      .from(pageViews)
      .where(gte(pageViews.timestamp, since));

    const topPages = await db
      .select({ page: pageViews.page, views: count() })
      .from(pageViews)
      .where(gte(pageViews.timestamp, since))
      .groupBy(pageViews.page)
      .orderBy(desc(count()))
      .limit(10);

    const topReferrers = await db
      .select({ referrer: pageViews.referrer, count: count() })
      .from(pageViews)
      .where(sql`${pageViews.referrer} IS NOT NULL AND ${pageViews.referrer} != '' AND ${pageViews.timestamp} >= ${since}`)
      .groupBy(pageViews.referrer)
      .orderBy(desc(count()))
      .limit(10);

    const topLocations = await db
      .select({
        country: sql<string>`COALESCE(${pageViews.country}, 'Unknown')`,
        city: sql<string>`COALESCE(${pageViews.city}, 'Unknown')`,
        count: count(),
      })
      .from(pageViews)
      .where(gte(pageViews.timestamp, since))
      .groupBy(sql`COALESCE(${pageViews.country}, 'Unknown'), COALESCE(${pageViews.city}, 'Unknown')`)
      .orderBy(desc(count()))
      .limit(10);

    const recentVisitors = await db
      .select()
      .from(pageViews)
      .orderBy(desc(pageViews.timestamp))
      .limit(20);

    const clicksByElement = await db
      .select({
        elementText: sql<string>`COALESCE(${clickEvents.elementText}, 'Unknown')`,
        href: clickEvents.href,
        count: count(),
      })
      .from(clickEvents)
      .where(gte(clickEvents.timestamp, since))
      .groupBy(sql`COALESCE(${clickEvents.elementText}, 'Unknown'), ${clickEvents.href}`)
      .orderBy(desc(count()))
      .limit(10);

    const viewsByDay = await db
      .select({
        date: sql<string>`TO_CHAR(${pageViews.timestamp}, 'YYYY-MM-DD')`,
        views: count(),
      })
      .from(pageViews)
      .where(gte(pageViews.timestamp, since))
      .groupBy(sql`TO_CHAR(${pageViews.timestamp}, 'YYYY-MM-DD')`)
      .orderBy(sql`TO_CHAR(${pageViews.timestamp}, 'YYYY-MM-DD')`);

    return {
      totalPageViews: totalPvResult.count,
      uniqueVisitors: Number(uniqueResult.count),
      totalClicks: totalClickResult.count,
      avgDuration: Math.round(Number(avgDurResult.avg)),
      topPages: topPages.map((r) => ({ page: r.page, views: r.views })),
      topReferrers: topReferrers.map((r) => ({ referrer: r.referrer || "Direct", count: r.count })),
      topLocations: topLocations.map((r) => ({ country: r.country, city: r.city, count: r.count })),
      recentVisitors,
      clicksByElement: clicksByElement.map((r) => ({ elementText: r.elementText, href: r.href, count: r.count })),
      viewsByDay: viewsByDay.map((r) => ({ date: r.date, views: r.views })),
    };
  }
}

export const storage = new DatabaseStorage();
