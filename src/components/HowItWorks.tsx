"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import {
  FORM_SECTION_ID,
  IMAGES,
  PHONE_DISPLAY,
  PHONE_HREF,
  STEPS,
  STEPS_SECTION_ID,
} from "@/lib/constants";

export default function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  // Gold line fills and steps light up as the list scrolls through the viewport
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const progress = Math.min(1, Math.max(0, (anchor - rect.top) / rect.height));
      list.style.setProperty("--fill", String(progress));

      const items = Array.from(list.querySelectorAll<HTMLElement>(".step"));
      setActiveCount(items.filter((el) => el.getBoundingClientRect().top < anchor).length);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id={STEPS_SECTION_ID} className="section-padding scroll-mt-20">
      <div className="container-main grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div>
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="section-label">How it works</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                From first call to first session, <span className="gold-italic">in four steps.</span>
              </h2>
              <p className="text-lead mx-auto mt-5 max-w-lg lg:mx-0">
                We keep the process simple and handle the paperwork, so you can focus on feeling
                better.
              </p>
            </div>
          </Reveal>

          <ol ref={listRef} className="relative mt-12 space-y-5">
            <span className="steps-track bottom-7 left-7 top-7 w-[2px]" aria-hidden>
              <span className="steps-fill" />
            </span>

            {STEPS.map((step, i) => (
              <li
                key={step.title}
                className={`step relative flex items-start gap-5 sm:gap-6${i < activeCount ? " is-active" : ""}`}
              >
                <span className="step-num shrink-0">{i + 1}</span>
                <div className="step-card">
                  <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:pl-20">
            <a href={`#${FORM_SECTION_ID}`} className="btn btn-gold w-full px-7 py-4 sm:w-auto">
              Start with step one
              <ArrowIcon />
            </a>
            <a href={PHONE_HREF} className="btn btn-outline w-full px-7 py-4 sm:w-auto">
              <PhoneIcon />
              Call {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>

        <Reveal delay={2} className="mx-auto w-full max-w-md lg:sticky lg:top-28 lg:max-w-none">
          <div className="steps-visual">
            <div className="steps-image">
              <Image
                src={IMAGES.brainSteps}
                alt="Illustration of the brain highlighting mood-regulating pathways"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="steps-caption">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                What TMS targets
              </p>
              <p className="mt-1 font-display text-lg font-semibold leading-snug text-white sm:text-xl">
                The brain circuits that help regulate mood
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
