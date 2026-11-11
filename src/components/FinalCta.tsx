"use client";

import { useEffect, useRef, useState } from "react";
import GoldRings from "@/components/GoldRings";
import Reveal from "@/components/Reveal";
import { AlertIcon, CheckIcon, PhoneIcon } from "@/components/Icons";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  SERVICE_AREA,
  FORM_HEIGHT,
  FORM_ID,
  FORM_IFRAME_ID,
  FORM_NAME,
  FORM_SECTION_ID,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/constants";
import { mountAndBindGhlForm, unmountGhlEmbed } from "@/lib/ghlEmbed";

const FORM_MIN_HEIGHT = "820px";

const PROMISES = [
  "Reply within one business day",
  "Insurance verified before your first visit",
  "Confidential and no obligation",
] as const;

export default function FinalCta() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const unbind = mountAndBindGhlForm(host, {
      id: FORM_ID,
      name: FORM_NAME,
      height: FORM_HEIGHT,
      iframeId: FORM_IFRAME_ID,
      minHeight: FORM_MIN_HEIGHT,
      borderRadius: "16px",
    });

    const iframe = host.querySelector("iframe");
    const onLoad = () => setLoaded(true);
    if (iframe) {
      iframe.setAttribute("data-cookie-consent", "true");
      iframe.setAttribute("data-cookie-consent-provider", "auto");
      iframe.addEventListener("load", onLoad);
    }

    return () => {
      iframe?.removeEventListener("load", onLoad);
      unbind();
      unmountGhlEmbed(host);
    };
  }, []);

  return (
    <section id={FORM_SECTION_ID} className="dark-section on-dark section-padding scroll-mt-16 overflow-hidden">
      <GoldRings corner="top-right" />
      <GoldRings corner="bottom-left" />

      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">Take the first step</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Find out if TMS <span className="gold-italic">is right for you.</span>
            </h2>
            <p className="text-lead mt-5">
              Share a few details and our team will follow up about eligibility, insurance, and
              next steps. Please do not include medical details in the form.
            </p>

            <ul className="mt-7 space-y-3">
              {PROMISES.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/85">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gold/20 text-gold-soft">
                    <CheckIcon />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <a
              href={PHONE_HREF}
              className="group mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold-soft/50 hover:bg-white/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-navy-ink transition-transform duration-500 group-hover:scale-110">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.8rem] uppercase tracking-[0.16em] text-white/55">
                  Prefer to talk? Call us
                </span>
                <span className="font-display text-2xl text-white">{PHONE_DISPLAY}</span>
              </span>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-[0.95rem] text-white/60 transition-colors hover:text-gold-soft"
            >
              {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
            </a>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-white/60">{SERVICE_AREA}</p>

            <div className="mt-8 flex gap-3 rounded-2xl border border-red-300/30 bg-red-500/10 p-5 text-[0.95rem] leading-relaxed text-white/85" role="note">
              <AlertIcon className="mt-0.5 h-5 w-5 shrink-0 text-red-200" />
              <p>
                <strong className="text-white">In a crisis?</strong> Call or text{" "}
                <a href="tel:988" className="font-semibold text-white underline underline-offset-2">988</a>{" "}
                or call{" "}
                <a href="tel:911" className="font-semibold text-white underline underline-offset-2">911</a>.
                Goldstone Psychiatry does not provide emergency care.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2} className="min-w-0">
            <div className="form-panel relative">
              {!loaded ? (
                <div className="absolute inset-2 space-y-4 rounded-2xl p-6" aria-hidden>
                  {[40, 100, 100, 100, 100, 70].map((w, i) => (
                    <div key={i} className="form-skeleton h-12 rounded-xl" style={{ width: `${w}%` }} />
                  ))}
                </div>
              ) : null}
              <div
                ref={hostRef}
                className="relative w-full"
                style={{ minHeight: FORM_MIN_HEIGHT }}
                aria-label="Find out if you qualify form"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
