"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Eyebrow } from "@/components/site/primitives";

export function NewsletterForm({ className }: { className?: string }) {
  const [done, setDone] = useState(false);

  return (
    <div className={className}>
      <Eyebrow className="tracking-[0.14em] text-gold">
        Get updates from the field
      </Eyebrow>
      {done ? (
        <p className="mt-3.5 border-b border-paper/40 py-3 font-serif text-[clamp(15px,1.15cqi,17px)] text-cream">
          Thanks — we&rsquo;ll be in touch from the field.
        </p>
      ) : (
        <form
          // ponytail: no list provider wired yet — swap for the real POST when
          // TCMCF picks one (Mailchimp/Brevo); the markup does not change.
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="mt-3.5 flex border-b border-paper/40"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            required
            placeholder="your@email.com"
            className="h-auto min-w-0 flex-1 rounded-none border-0 bg-transparent px-0.5 py-[13px] font-serif text-[clamp(15px,1.15cqi,17px)] text-paper shadow-none placeholder:text-paper/50 focus-visible:ring-0"
          />
          <button
            type="submit"
            className="shrink-0 px-1 py-[13px] font-mono text-[clamp(12px,0.9cqi,14px)] text-paper transition-colors hover:text-sand"
          >
            SUBSCRIBE →
          </button>
        </form>
      )}
    </div>
  );
}
