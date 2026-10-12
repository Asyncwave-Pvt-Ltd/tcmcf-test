"use client";

import { useEffect, useRef, useState } from "react";

const DIGITS = "0123456789";

/**
 * Odometer roll: each digit is a 0–9 strip (two laps, then the target) that
 * slides up once the figure is 40% on screen, left digits starting first.
 * Anything else in `text` (commas, "+", "%", units) stays put.
 */
export function RollingNumber({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setRun(true);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let col = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden className="flex tabular-nums">
        {[...text].map((ch, i) => {
          if (!DIGITS.includes(ch)) {
            return (
              <span key={i} className="whitespace-pre">
                {ch}
              </span>
            );
          }
          const delay = col++ * 90;
          const target = 20 + Number(ch);
          return (
            <span key={i} className="h-[1em] overflow-hidden">
              <span
                className="flex flex-col transition-transform duration-[1400ms] ease-[cubic-bezier(0.09,0,0,1)] motion-reduce:transition-none"
                style={{
                  transform: `translateY(-${run ? target : 0}em)`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                {(DIGITS + DIGITS + DIGITS.slice(0, Number(ch) + 1))
                  .split("")
                  .map((d, j) => (
                    <span key={j} className="h-[1em]">
                      {d}
                    </span>
                  ))}
              </span>
            </span>
          );
        })}
      </span>
    </>
  );
}
