import type { SourceType } from "@/lib/types";
import { SOURCE_BADGE_CLS, SOURCE_LABEL } from "@/lib/types";

export function SourceBadge({ type }: { type: SourceType }) {
  return (
    <span
      className={`inline-flex items-center text-[11px] uppercase tracking-wider font-medium px-2 py-0.5 rounded ${SOURCE_BADGE_CLS[type]}`}
    >
      {SOURCE_LABEL[type]}
    </span>
  );
}
