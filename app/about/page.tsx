import Link from "next/link";

export const metadata = {
  title: "About — jiang.casa",
  description: "About Jiang Xueqin and the Predictive History project.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-12">
      <h1 className="font-serif text-3xl tracking-tight mb-6">About</h1>
      <div className="prose-like text-[var(--color-ink)] leading-[1.75] text-[17px] font-serif space-y-5">
        <p>
          Jiang Xueqin is a writer and analyst whose project,{" "}
          <a
            href="https://www.youtube.com/@PredictiveHistory"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[var(--color-ink-faint)] hover:decoration-[var(--color-ink)]"
          >
            Predictive History
          </a>
          , tries to forecast geopolitical outcomes by reasoning about incentives and
          constraints rather than narratives. He has appeared with Tucker Carlson, Piers
          Morgan, Glenn Diesen, Danny Haiphong, and Gita Wirjawan, among others, and
          publishes long-form essays on{" "}
          <a
            href="https://predictivehistory.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-[var(--color-ink-faint)] hover:decoration-[var(--color-ink)]"
          >
            Substack
          </a>
          .
        </p>
        <p>
          This site is an unaffiliated index of Jiang&rsquo;s public work — a single,
          chronological surface across YouTube, guest appearances, and written posts. It
          aims to make his output easier to follow over time without filtering it through
          any one platform&rsquo;s algorithm.
        </p>
      </div>

      <div className="mt-10 text-sm">
        <Link
          href="/"
          className="text-[var(--color-ink-dim)] hover:text-[var(--color-ink)] transition"
        >
          ← Back to feed
        </Link>
      </div>
    </div>
  );
}
