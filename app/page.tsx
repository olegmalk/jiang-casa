import { loadFeed } from "@/lib/feed";
import { FeedList } from "@/components/FeedList";

export default function HomePage() {
  const feed = loadFeed();
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <section className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">
          The public work of Jiang Xueqin
        </h1>
        <p className="text-[var(--color-ink-dim)] text-base leading-relaxed">
          A chronological feed of Jiang&rsquo;s own videos (Predictive History), guest
          interviews, and Substack posts. Newest first.
        </p>
      </section>

      <FeedList items={feed.items} />
    </div>
  );
}
