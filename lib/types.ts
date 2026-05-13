export type SourceType = "own-yt" | "guest-yt" | "substack";

export type FeedItem = {
  id: string;
  source_type: SourceType;
  source_url: string;
  published_at: string; // ISO 8601
  title: string;
  excerpt: string;
  host_channel?: string;
  duration_s?: number;
};

export type Feed = {
  generated_at: string;
  items: FeedItem[];
};

export const SOURCE_LABEL: Record<SourceType, string> = {
  "own-yt": "Own video",
  "guest-yt": "Guest interview",
  substack: "Substack",
};

export const SOURCE_SHORT: Record<SourceType, string> = {
  "own-yt": "Own",
  "guest-yt": "Guest",
  substack: "Written",
};

// Tailwind-friendly badge classes per source-type
export const SOURCE_BADGE_CLS: Record<SourceType, string> = {
  "own-yt":
    "bg-[var(--color-own-bg)] text-[var(--color-own)] border border-[var(--color-own)]/30",
  "guest-yt":
    "bg-[var(--color-guest-bg)] text-[var(--color-guest)] border border-[var(--color-guest)]/30",
  substack:
    "bg-[var(--color-written-bg)] text-[var(--color-written)] border border-[var(--color-written)]/30",
};
