# jiang.casa

A chronological feed aggregating the public work of Jiang Xueqin (Predictive History) — own videos, guest interviews, and Substack posts.

Not affiliated with Jiang.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4
- Static SSG, deployed to Vercel
- Single static data manifest at `public/data/jiang-feed.json`

## Local development

```bash
bun install
bun run dev
```

Visit http://localhost:3000.

## Build

```bash
bun run build
```

## Data manifest

Feed items live in [`public/data/jiang-feed.json`](public/data/jiang-feed.json). Schema:

```ts
type FeedItem = {
  id: string;                                    // stable slug
  source_type: "own-yt" | "guest-yt" | "substack";
  source_url: string;                            // canonical original URL
  published_at: string;                          // ISO 8601
  title: string;
  excerpt: string;
  host_channel?: string;                         // for guest-yt only
  duration_s?: number;                           // for video items
};
```

To update the feed: edit the JSON directly for now.

**TODO**: connect to compass-research publish CLI to regenerate the manifest from canonical source data.

## Routes

| Path | Purpose |
|---|---|
| `/` | Chronological feed with source-type filter chips |
| `/item/[id]` | Per-item detail page with "view original" CTA |
| `/about` | One-paragraph about Jiang + Predictive History |

## Deploy

Auto-deploys to Vercel on push to `main`. Production: https://jiang.casa
