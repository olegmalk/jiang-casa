import fs from "node:fs";
import path from "node:path";
import type { Feed, FeedItem } from "./types";

let cached: Feed | null = null;

export function loadFeed(): Feed {
  if (cached) return cached;
  const filePath = path.join(process.cwd(), "public", "data", "jiang-feed.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(raw) as Feed;
  // sort newest-first defensively
  parsed.items.sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
  cached = parsed;
  return parsed;
}

export function getItem(id: string): FeedItem | undefined {
  return loadFeed().items.find((i) => i.id === id);
}

export function getAllItemIds(): string[] {
  return loadFeed().items.map((i) => i.id);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  // e.g. "Mar 7, 2026"
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function formatDuration(seconds: number | undefined): string | null {
  if (!seconds || seconds <= 0) return null;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
