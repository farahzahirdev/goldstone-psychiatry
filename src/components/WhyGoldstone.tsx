"use client";

import GoldRings from "@/components/GoldRings";
import Reveal from "@/components/Reveal";
import { FeatureIcon } from "@/components/Icons";
import { WHY_ITEMS, WHY_SECTION_ID } from "@/lib/constants";

export default function WhyGoldstone() {
  const onMove = (e: React.PointerEvent<HTMLLIElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id={WHY_SECTION_ID} className="dark-section on-dark section-padding scroll-mt-20 overflow-hidden">
      <span className="aurora aurora-blue" aria-hidden />
      <span className="aurora aurora-gold" aria-hidden />
      {/* decorative rings echoing brand art */}
      <GoldRings corner="top-right" />
      <GoldRings corner="bottom-left" />

      <div className="container-main">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-label justify-center">Why Goldstone</p>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            The physician-led difference. <span className="gold-italic">Not a TMS mill.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Many TMS centers run on volume. Goldstone is built around time, precision, and a
            psychiatrist who knows your history.
          </p>
        </Reveal>

        <Reveal>
          <ul className="stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item) => (
              <li key={item.title} className="spot-card p-7" onPointerMove={onMove}>
                <span className="icon-badge">
                  <FeatureIcon name={item.icon} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2.5 leading-relaxed text-white/65">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
