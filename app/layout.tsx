import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "jiang.casa — the public work of Jiang Xueqin",
  description:
    "A chronological feed aggregating Jiang Xueqin's videos, guest interviews, and Substack posts. Not affiliated.",
  openGraph: {
    title: "jiang.casa",
    description:
      "A chronological feed aggregating Jiang Xueqin's public work — Predictive History videos, guest interviews, written posts.",
    type: "website",
    url: "https://jiang.casa",
    siteName: "jiang.casa",
  },
  twitter: {
    card: "summary",
    title: "jiang.casa",
    description: "Aggregating the public work of Jiang Xueqin.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-[var(--color-rule)]">
            <div className="max-w-3xl mx-auto px-5 py-5 flex items-baseline justify-between">
              <Link
                href="/"
                className="text-xl font-serif font-semibold tracking-tight hover:text-white transition"
              >
                jiang.casa
              </Link>
              <nav className="flex gap-5 text-sm text-[var(--color-ink-dim)]">
                <Link href="/" className="hover:text-[var(--color-ink)] transition">
                  Feed
                </Link>
                <Link href="/about" className="hover:text-[var(--color-ink)] transition">
                  About
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-[var(--color-rule)] mt-16">
            <div className="max-w-3xl mx-auto px-5 py-6 text-xs text-[var(--color-ink-faint)]">
              Aggregating the public work of Jiang Xueqin · not affiliated
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
