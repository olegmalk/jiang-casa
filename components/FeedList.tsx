"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { FeedItem, SourceType } from "@/lib/types";
import { SOURCE_SHORT } from "@/lib/types";
import { SourceBadge } from "./SourceBadge";
import { formatDate, formatDuration } from "@/lib/feed-client";

type Filter = "all" | SourceType;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "own-yt", label: "Own videos" },
  { key: "guest-yt", label: "Guest interviews" },
  { key: "substack", label: "Substack" },
];

export function FeedList({ items }: { items: FeedItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.source_type === filter)),
    [items, filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                active
                  ? "bg-[var(--color-ink)] text-[var(--color-bg)] border-[var(--color-ink)]"
                  : "border-[var(--color-rule)] text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] hover:border-[var(--color-ink-faint)]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="flex flex-col gap-5">
        {visible.map((item) => (
          <li
            key={item.id}
            className="border border-[var(--color-rule)] rounded-lg p-5 hover:border-[var(--color-ink-faint)] transition bg-[var(--color-bg-elev)]"
          >
            <div className="flex items-center gap-3 mb-2 text-xs text-[var(--color-ink-dim)]">
              <SourceBadge type={item.source_type} />
              <span>{formatDate(item.published_at)}</span>
              {item.duration_s ? <span>· {formatDuration(item.duration_s)}</span> : null}
              {item.host_channel ? (
                <span className="truncate">· {item.host_channel}</span>
              ) : null}
            </div>

            <Link
              href={`/item/${item.id}`}
              className="block font-serif text-xl md:text-2xl leading-snug hover:text-white transition"
            >
              {item.title}
            </Link>

            <p className="text-sm text-[var(--color-ink-dim)] mt-2 leading-relaxed">
              {item.excerpt}
            </p>

            <div className="mt-3 flex items-center gap-4 text-xs">
              <Link
                href={`/item/${item.id}`}
                className="text-[var(--color-ink)] hover:underline underline-offset-4"
              >
                Read more
              </Link>
              <a
                href={item.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition"
              >
                Open original ({SOURCE_SHORT[item.source_type]}) ↗
              </a>
            </div>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <div className="text-sm text-[var(--color-ink-dim)] py-8 text-center">
          Nothing in this filter yet.
        </div>
      ) : null}
    </div>
  );
}
