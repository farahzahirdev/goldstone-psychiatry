"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { PhoneIcon, PlusIcon } from "@/components/Icons";
import { FAQ_ITEMS, FAQ_SECTION_ID, FORM_SECTION_ID, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={FAQ_SECTION_ID} className="section-padding scroll-mt-20 bg-cream">
      <div className="container-main grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-label">Questions</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Good to know <span className="gold-italic">before you start.</span>
          </h2>
          <p className="text-lead mt-5">
            Still have questions? Call{" "}
            <a href={PHONE_HREF} className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep">
              {PHONE_DISPLAY}
            </a>
            . We reply within one business day.
          </p>

          <div className="faq-contact mt-8 p-7">
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Talk to our team
            </p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug text-white">
              Not sure if TMS fits? We can help you find out.
            </p>
            <div className="relative z-10 mt-6 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              <a href={`#${FORM_SECTION_ID}`} className="btn btn-gold btn-sm py-3">
                Find Out If You Qualify
              </a>
              <a href={PHONE_HREF} className="btn btn-ghost-light btn-sm py-3">
                <PhoneIcon className="h-3.5 w-3.5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="border-t border-line">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={item.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <h3 className="text-xl sm:text-[1.4rem]">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold-deep"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      {item.question}
                      <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white text-navy">
                        <PlusIcon />
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} className="faq-panel" role="region">
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
