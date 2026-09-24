import { AutoGrid } from "@/components/site/primitives";
import { CERT_ROWS } from "@/lib/content";

const COLS = 240;

/**
 * Certification table. The same auto-fit grid gives three columns when there is
 * room and stacks into labelled rows when there isn't, so no media query is
 * needed — the labels simply hide once the header row is visible alongside.
 */
export function CertTable() {
  return (
    <section className="gutter py-[clamp(28px,3.6cqi,56px)]">
      <AutoGrid
        min={COLS}
        gap="clamp(12px,1.2cqi,18px)"
        className="hidden border-b border-ink/25 pb-[clamp(10px,1cqi,14px)] font-mono text-[clamp(9.5px,0.78cqi,11px)] tracking-[0.12em] text-bark uppercase sm:grid"
      >
        <span>Certification</span>
        <span>Issuing Body</span>
        <span>Why It Matters</span>
      </AutoGrid>

      {CERT_ROWS.map((row) => (
        <AutoGrid
          key={row.c}
          min={COLS}
          gap="clamp(8px,1.2cqi,18px)"
          className="border-b border-ink/12 py-[clamp(16px,1.6cqi,24px)] transition-colors hover:bg-sage"
        >
          <div className="font-serif text-[clamp(17px,1.4cqi,20px)]/[1.3] font-medium text-ink">
            {row.c}
          </div>
          <div>
            <div className="mb-[5px] font-mono text-[9.5px] tracking-[0.12em] text-bark uppercase sm:hidden">
              Issuing Body
            </div>
            <div className="font-serif text-[clamp(14px,1.1cqi,16px)]/[1.55] font-normal text-bark">
              {row.b}
            </div>
          </div>
          <div>
            <div className="mb-[5px] font-mono text-[9.5px] tracking-[0.12em] text-bark uppercase sm:hidden">
              Why It Matters
            </div>
            <div className="font-serif text-[clamp(14px,1.1cqi,16px)]/[1.6] font-normal text-body text-pretty">
              {row.d}
            </div>
          </div>
        </AutoGrid>
      ))}
    </section>
  );
}
