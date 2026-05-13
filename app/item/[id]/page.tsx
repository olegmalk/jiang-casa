import Link from "next/link";
import { notFound } from "next/navigation";
import { SourceBadge } from "@/components/SourceBadge";
import { formatDate, formatDuration, getAllItemIds, getItem, loadFeed } from "@/lib/feed";

export async function generateStaticParams() {
  return getAllItemIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getItem(id);
  if (!item) return { title: "Not found — jiang.casa" };
  return {
    title: `${item.title} — jiang.casa`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      type: "article",
      publishedTime: item.published_at,
    },
  };
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getItem(id);
  if (!item) return notFound();

  // ensure feed is warmed so getItem returns sorted list semantics (no-op in client paths)
  loadFeed();

  return (
    <article className="max-w-2xl mx-auto px-5 py-10">
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition"
        >
          ← Back to feed
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-4 text-xs text-[var(--color-ink-dim)] flex-wrap">
        <SourceBadge type={item.source_type} />
        <span>{formatDate(item.published_at)}</span>
        {item.duration_s ? <span>· {formatDuration(item.duration_s)}</span> : null}
        {item.host_channel ? <span>· {item.host_channel}</span> : null}
      </div>

      <h1 className="font-serif text-3xl md:text-4xl tracking-tight leading-tight mb-6">
        {item.title}
      </h1>

      <div className="font-serif text-[18px] leading-[1.8] text-[var(--color-ink)] space-y-5">
        <p>{item.excerpt}</p>
      </div>

      <div className="mt-10 pt-6 border-t border-[var(--color-rule)]">
        <a
          href={item.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--color-ink)] text-[var(--color-bg)] px-5 py-3 rounded-md font-medium text-sm hover:bg-white transition"
        >
          View original ↗
        </a>
        <p className="text-xs text-[var(--color-ink-faint)] mt-3 break-all">
          {item.source_url}
        </p>
      </div>
    </article>
  );
}
