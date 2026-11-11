import Reveal from "@/components/Reveal";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import {
  INSURANCE_CARRIERS,
  INSURANCE_POINTS,
  INSURANCE_SECTION_ID,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/constants";

export default function InsuranceSection() {
  return (
    <section id={INSURANCE_SECTION_ID} className="section-padding scroll-mt-20 bg-cream">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="section-label">Insurance &amp; coverage</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Most plans and Medicare <span className="gold-italic">cover TMS.</span>
              </h2>
              <p className="text-lead mt-6">
                Most commercial insurance plans and Medicare cover standard TMS for qualifying
                patients with major depressive disorder. Prior authorization is usually required,
                and we take care of it for you.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-white p-5 sm:p-6">
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.14em] text-navy">
                Plans we work with
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {INSURANCE_CARRIERS.map((c) => (
                  <li key={c} className="carrier-chip">
                    <CheckIcon className="h-3.5 w-3.5 text-gold-deep" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.95rem] text-muted">
                Do not see your plan? We are actively credentialing.{" "}
                <a href={PHONE_HREF} className="font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold-deep">
                  Call {PHONE_DISPLAY}
                </a>{" "}
                and we will check for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <ol className="stagger relative space-y-4">
              {INSURANCE_POINTS.map((p, i) => (
                <li key={p.title} className="card card-hover p-6 sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-navy font-display text-lg text-gold-soft">
                    {i + 1}
                  </span>
                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-4 rounded-2xl bg-navy p-6 text-white sm:p-7">
                <div className="flex-1">
                  <p className="font-display text-2xl text-white">Questions about cost?</p>
                  <p className="mt-1 text-[0.95rem] text-white/70">
                    Our team will walk you through coverage before your first visit.
                  </p>
                </div>
                <a href={PHONE_HREF} className="btn btn-gold btn-sm shrink-0" aria-label={`Call ${PHONE_DISPLAY}`}>
                  <PhoneIcon />
                  <span className="hidden sm:inline">Call us</span>
                </a>
              </li>
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
