"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/Reveal";
import { ArrowIcon } from "@/components/Icons";
import { DOCTOR, DOCTOR_SECTION_ID, FORM_SECTION_ID, IMAGES } from "@/lib/constants";

const CREDENTIALS = [
  { label: "Training", value: DOCTOR.training },
  { label: "Specialty", value: DOCTOR.role },
  { label: "Focus", value: DOCTOR.focus },
  { label: "Visits", value: "In person in Houston. Telehealth in Texas and California." },
] as const;

export default function DoctorSection() {
  const photoRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const onLeave = () => {
    if (photoRef.current) photoRef.current.style.transform = "";
  };

  return (
    <section id={DOCTOR_SECTION_ID} className="section-padding scroll-mt-20 overflow-x-clip bg-cream">
      <div className="container-main">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="reveal-slide-left mx-auto w-full max-w-sm lg:max-w-none">
            <div className="doctor-photo-wrap" onPointerMove={onMove} onPointerLeave={onLeave}>
              <div ref={photoRef} className="doctor-photo aspect-[6/7]">
                <Image
                  src={IMAGES.doctor}
                  alt="Dr. Gibson Anugwom, MD, interventional psychiatrist in Houston, Texas"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  quality={95}
                  className="object-cover object-[50%_22%]"
                />
                <div className="doctor-name absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-ink/90 via-navy-ink/40 to-transparent p-6 pt-20">
                  <p className="font-display text-2xl text-white">{DOCTOR.name}</p>
                  <p className="text-sm text-gold-soft">{DOCTOR.title}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <p className="section-label">Meet your physician</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Care led by <span className="gold-italic">{DOCTOR.name}</span>
            </h2>
            <p className="text-lead mt-6">{DOCTOR.approach}</p>
            <p className="text-lead mt-4">
              As Founder and Clinical Director, Dr. Anugwom personally guides TMS care at Goldstone, from your
              first evaluation through every protocol adjustment.
            </p>

            <dl className="stagger mt-8">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="cred-row">
                  <dt className="w-24 shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep sm:w-28">
                    {c.label}
                  </dt>
                  <dd className="text-navy-ink">{c.value}</dd>
                </div>
              ))}
            </dl>

            <a href={`#${FORM_SECTION_ID}`} className="btn btn-navy mt-8">
              Request an evaluation
              <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
