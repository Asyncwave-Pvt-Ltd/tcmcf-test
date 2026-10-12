"use client";

import Image from "next/image";
import { Dialog } from "radix-ui";
import { XIcon } from "lucide-react";
import { cn } from "cn";

import { IMAGE_SKELETON, Photo } from "@/components/site/primitives";
import type { TeamMember } from "@/lib/sanity";

/** 4:5 portrait from the CMS, or the hatched slot until one is uploaded. */
export function Portrait({
  member,
  sizes,
  className,
}: {
  member: TeamMember;
  sizes: string;
  className?: string;
}) {
  if (!member.image) {
    return <Photo label="PORTRAIT" tone="fine" className={cn("aspect-4/5", className)} />;
  }
  return (
    <div className={cn("relative aspect-4/5", className)}>
      <Image
        placeholder={IMAGE_SKELETON}
        src={member.image}
        alt={member.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={member.focus ? { objectPosition: member.focus } : undefined}
      />
    </div>
  );
}

/** Stretches over the whole (relative) card so a click anywhere opens the profile. */
export function MemberTrigger({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Trigger className="cursor-pointer text-left after:absolute after:inset-0 focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-bark">
      {children}
    </Dialog.Trigger>
  );
}

export function MemberDialog({
  member,
  children,
}: {
  member: TeamMember;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      {children}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[760px] -translate-1/2 gap-5 overflow-y-auto border border-ink/14 bg-paper p-6 shadow-lg duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 md:grid-cols-[220px_1fr] md:gap-8 md:p-8 lg:grid-cols-[260px_1fr] lg:p-10">
          <Portrait
            member={member}
            sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 140px"
            className="w-[140px] md:w-auto"
          />
          <div>
            <div className="font-mono text-[10.5px]/[1.5] font-normal tracking-[0.08em] text-bark uppercase md:text-[11px]/[1.5]">
              {member.r}
            </div>
            <Dialog.Title className="mt-2 mb-0 font-heading text-[24px]/[1.2] font-normal text-ink md:text-[28px]/[1.2] lg:text-[32px]/[1.15]">
              {member.n}
            </Dialog.Title>
            <div className="mt-4 h-px w-12 bg-gold md:mt-5" />
            <Dialog.Description className="mt-4 mb-0 font-serif text-[15px]/[1.7] font-normal text-body md:mt-5 md:text-[16px]/[1.7]">
              {member.d}
            </Dialog.Description>
          </div>
          <Dialog.Close
            aria-label="Close"
            className="absolute top-3 right-3 flex size-9 cursor-pointer items-center justify-center text-bark hover:text-ink focus-visible:outline-2 focus-visible:outline-bark"
          >
            <XIcon className="size-5" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
