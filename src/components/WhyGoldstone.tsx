"use client";

import GoldRings from "@/components/GoldRings";
import Reveal from "@/components/Reveal";
import { FeatureIcon } from "@/components/Icons";
import { WHY_ITEMS, WHY_SECTION_ID } from "@/lib/constants";

const MAX_TILT = 5; // degrees

export default function WhyGoldstone() {
  // One handler on the grid: every card gets the cursor position (for the shared
  // border glow), and the card under the cursor also gets its tilt angles.
  const onGridMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse") return;
    e.currentTarget.querySelectorAll<HTMLElement>(".why-card").forEach((card) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      if (x >= 0 && y >= 0 && x <= r.width && y <= r.height) {
        card.style.setProperty("--ry", `${((x / r.width - 0.5) * 2 * MAX_TILT).toFixed(2)}deg`);
        card.style.setProperty("--rx", `${((0.5 - y / r.height) * 2 * MAX_TILT).toFixed(2)}deg`);
      }
    });
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
          <p className="text-lead mt-5">
            Many TMS centers run on volume. Goldstone is built around time, precision, and a
            psychiatrist who knows your history.
          </p>
        </Reveal>

        <Reveal>
          <ul
            className="why-grid stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            onPointerMove={onGridMove}
          >
            {WHY_ITEMS.map((item, i) => (
              <li key={item.title} className="why-cell">
                <div className="spot-card why-card h-full p-7">
                  <span className="why-trace" aria-hidden />
                  <div className="relative z-[2]">
                    <div className="flex items-start justify-between">
                      <span className="icon-badge">
                        <FeatureIcon name={item.icon} />
                      </span>
                      <span className="why-num font-display text-2xl italic">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-2.5 leading-relaxed text-white/65">{item.body}</p>
                  </div>
                  <span className="why-underline" aria-hidden />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
