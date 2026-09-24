import { cn } from "cn";

/**
 * Shared building blocks. Every size here is a `clamp(min, Ncqi, max)` taken
 * straight from the canvas, so one fluid rule replaces per-breakpoint variants.
 */

/** Mono, uppercase, letter-spaced kicker used above almost every heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[clamp(9.5px,0.78cqi,11px)] font-normal tracking-[0.15em] text-bark uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** The short gold hairline under a hero headline. */
export function Rule({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "my-[clamp(18px,2.2cqi,32px)] h-px w-[clamp(44px,4.4cqi,64px)] bg-gold",
        className,
      )}
    />
  );
}

/**
 * Hatched image slot standing in for photography TCMCF has yet to supply.
 * Swap the inner span for <Image> once real assets land.
 */
export function Photo({
  label,
  className,
  tone = "sage",
  boxed = false,
}: {
  label: string;
  className?: string;
  tone?: "sage" | "deep" | "fine";
  boxed?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center border border-ink/12",
        tone === "sage" && "hatch",
        tone === "fine" && "hatch-sm",
        tone === "deep" && "hatch-deep border-ink/14",
        className,
      )}
    >
      <span
        className={cn(
          "text-center font-mono text-[clamp(9px,0.76cqi,11px)] font-normal text-bark",
          boxed &&
            "border border-ink/18 bg-paper px-[11px] py-[7px] tracking-[0.1em] text-ink",
        )}
      >
        {label}
      </span>
    </div>
  );
}

/** Dashed logo placeholder. */
export function LogoMark({
  reversed = false,
  className,
}: {
  reversed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center border border-dashed font-mono font-normal tracking-[0.12em]",
        reversed
          ? "h-[clamp(38px,3cqi,44px)] w-[clamp(140px,11cqi,160px)] border-paper/40 text-[clamp(8px,0.63cqi,9px)] text-sand"
          : "hatch-logo h-[clamp(36px,3.35cqi,48px)] w-[clamp(128px,12.8cqi,184px)] border-ink/35 text-[clamp(8px,0.68cqi,9.5px)] text-bark",
        className,
      )}
    >
      {reversed ? "LOGO REVERSED" : "LOGO"}
    </div>
  );
}

/**
 * The masthead every inner page opens with: kicker, headline, gold rule, lede.
 */
export function PageHero({
  eyebrow,
  title,
  children,
  lede,
  className,
  bordered = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      className={cn(
        "gutter pt-[clamp(32px,5cqi,76px)] pb-[clamp(24px,3cqi,48px)]",
        bordered && "border-b border-ink/12",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-[clamp(14px,1.5cqi,22px)] mb-0 max-w-[900px] font-heading text-[clamp(28px,3.2cqi,46px)]/[1.16] font-normal text-ink text-pretty">
        {title}
      </h1>
      <Rule />
      {lede ? (
        <p className="m-0 max-w-[840px] font-serif text-[clamp(15px,1.25cqi,18px)]/[1.7] font-normal text-body text-pretty">
          {lede}
        </p>
      ) : null}
      {children}
    </section>
  );
}

/**
 * Dark band of headline figures. Each artboard sets its own figure size, so
 * the three sizes here map to Impact (lg), Community (md) and Stories (sm).
 */
const STAT_SIZES = {
  lg: {
    pad: "px-[clamp(20px,2.2cqi,32px)] py-[clamp(22px,2.8cqi,40px)]",
    value: "text-[clamp(30px,3.2cqi,46px)]/none",
    label: "text-[clamp(10px,0.78cqi,11px)]/[1.5]",
  },
  md: {
    pad: "px-[clamp(18px,2cqi,28px)] py-[clamp(20px,2.5cqi,36px)]",
    value: "text-[clamp(28px,2.8cqi,40px)]/none",
    label: "text-[clamp(9.5px,0.76cqi,11px)]/[1.5]",
  },
  sm: {
    pad: "px-[clamp(18px,2cqi,28px)] py-[clamp(20px,2.5cqi,36px)]",
    value: "text-[clamp(26px,2.6cqi,38px)]/none",
    label: "text-[clamp(9.5px,0.76cqi,11px)]/[1.5]",
  },
} as const;

export function StatStrip({
  stats,
  minColumn = 200,
  size = "lg",
  className,
}: {
  stats: readonly { v: string; k: string }[];
  /** Narrowest a column may get before the grid wraps. */
  minColumn?: number;
  size?: keyof typeof STAT_SIZES;
  className?: string;
}) {
  const s = STAT_SIZES[size];
  return (
    <section
      className={cn("grid bg-ink", className)}
      style={{
        gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${minColumn}px),1fr))`,
      }}
    >
      {stats.map((stat) => (
        <div
          key={stat.k}
          className={cn("border-r border-b border-paper/14", s.pad)}
        >
          <div className={cn("font-serif font-normal text-paper", s.value)}>
            {stat.v}
          </div>
          <div
            className={cn(
              "mt-2.5 font-mono font-normal tracking-[0.1em] text-sand uppercase",
              s.label,
            )}
          >
            {stat.k}
          </div>
        </div>
      ))}
    </section>
  );
}

/** Bordered pill used for certifications, focus areas and FPO services. */
export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "border border-ink/20 bg-paper px-3 py-[7px] font-serif text-[clamp(12px,0.95cqi,13.5px)] font-normal text-ink transition-colors hover:bg-sage",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Grid that reflows on its own via auto-fit, the way every new artboard does.
 * `min` is the narrowest a column may get before the row wraps.
 */
export function AutoGrid({
  min,
  gap,
  className,
  style,
  children,
}: {
  min: number;
  gap?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`,
        ...(gap ? { gap } : null),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
