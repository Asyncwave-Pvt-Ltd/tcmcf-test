"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/lib/content";

const labelClass =
  "font-mono text-[clamp(9.5px,0.76cqi,10.5px)] font-normal tracking-[0.12em] text-bark uppercase";
const fieldClass =
  "mt-2 w-full rounded-none border border-ink/20 bg-paper px-3.5 py-3.25 font-serif text-[clamp(15px,1.15cqi,16px)] text-ink shadow-none placeholder:text-bark/60 focus-visible:border-gold focus-visible:ring-0";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="border border-ink/14 bg-sage p-[clamp(22px,2.2cqi,32px)]">
      <h2 className="m-0 font-heading text-[clamp(20px,1.9cqi,27px)]/[1.22] font-normal text-ink">
        Send an enquiry
      </h2>

      {sent ? (
        <p className="mt-[clamp(18px,1.8cqi,26px)] mb-0 font-serif text-[clamp(15px,1.2cqi,17px)]/[1.7] text-body">
          Thanks — your message is on its way. We&rsquo;ll reply from{" "}
          {CONTACT.email}.
        </p>
      ) : (
        <form
          // ponytail: no mail backend yet — point this at the real endpoint
          // (or a route handler) once TCMCF picks one; the fields stay as-is.
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-[clamp(18px,1.8cqi,26px)] flex flex-col gap-[clamp(16px,1.6cqi,22px)]"
        >
          <div>
            <label htmlFor="enquiry-name" className={labelClass}>
              Name
            </label>
            <Input
              id="enquiry-name"
              name="name"
              required
              placeholder="Your full name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="enquiry-email" className={labelClass}>
              Email
            </label>
            <Input
              id="enquiry-email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="enquiry-message" className={labelClass}>
              Message
            </label>
            <Textarea
              id="enquiry-message"
              name="message"
              required
              rows={5}
              placeholder="How would you like to work with TCMCF?"
              className={`${fieldClass} resize-y leading-[1.6]`}
            />
          </div>
          <Button type="submit" variant="brand" size="cta">
            Send enquiry
          </Button>
        </form>
      )}

      <p className="mt-[clamp(18px,1.8cqi,26px)] mb-0 border-t border-ink/15 pt-[clamp(14px,1.4cqi,20px)] font-serif text-[clamp(13.5px,1.05cqi,15px)]/[1.65] font-normal text-body">
        Partnering with us? Write directly to{" "}
        <a href={`mailto:${CONTACT.email}`} className="text-bark hover:text-ink">
          {CONTACT.email}
        </a>
        .
      </p>
    </div>
  );
}
