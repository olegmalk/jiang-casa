import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-5 py-20 text-center">
      <h1 className="font-serif text-3xl mb-4">Not found</h1>
      <p className="text-[var(--color-ink-dim)] mb-8">
        That item isn&rsquo;t in the feed.
      </p>
      <Link
        href="/"
        className="text-sm text-[var(--color-ink)] underline underline-offset-4"
      >
        ← Back to feed
      </Link>
    </div>
  );
}
