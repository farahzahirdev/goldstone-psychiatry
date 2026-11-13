import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowIcon, CarIcon, CheckIcon } from "@/components/Icons";
import { DEVICE_NAME, FORM_SECTION_ID, IMAGES, NO_LIST, TMS_SECTION_ID, WHO_IT_HELPS } from "@/lib/constants";

const HELP_ICONS = [
  // cloud / low mood
  <path key="a" d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 1.5A3.3 3.3 0 0 0 7 18Z" />,
  // pulse / anxious
  <path key="b" d="M3 12h4l2-5 4 10 2-5h6" />,
  // loop / OCD
  <path key="c" d="M17 2l3 3-3 3M20 5H9a5 5 0 0 0-5 5M7 22l-3-3 3-3M4 19h11a5 5 0 0 0 5-5" />,
];

export default function TmsSection() {
  return (
    <section id={TMS_SECTION_ID} className="section-padding scroll-mt-20 overflow-hidden">
      <div className="container-main">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="section-label">What is TMS</p>
              <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
                Targeted brain stimulation, <span className="gold-italic">without the pills.</span>
              </h2>
              <p className="text-lead mt-6">
                Transcranial Magnetic Stimulation (TMS) uses focused magnetic pulses to gently
                activate the areas of the brain that regulate mood. These circuits are often
                underactive in depression. You stay awake and comfortable, then get on with your day.
              </p>
              <p className="text-lead mt-4">
                Every protocol at Goldstone is designed and adjusted by your physician, and delivered
                with {DEVICE_NAME} technology.
              </p>
            </div>

            <ul className="stagger mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {NO_LIST.map((item) => (
                <li key={item} className="good-pill">
                  <span className="check-dot h-5 w-5">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <SessionPhoto />
          </Reveal>
        </div>

        <Reveal className="mt-24 sm:mt-28">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-end sm:text-left">
            <div className="max-w-xl">
              <p className="section-label">Who it helps</p>
              <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Built for depression that has <span className="gold-italic">not responded</span> to
                medication
              </h3>
            </div>
            <a href={`#${FORM_SECTION_ID}`} className="btn btn-navy shrink-0">
              Check my eligibility
              <ArrowIcon />
            </a>
          </div>

          <ul className="stagger mt-10 grid gap-4 md:grid-cols-3">
            {WHO_IT_HELPS.map((item, i) => (
              <li key={item.title} className="card card-hover help-card group p-6 sm:p-7">
                <span className="help-icon">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {HELP_ICONS[i]}
                  </svg>
                </span>
                <h4 className="mt-6 text-xl font-semibold">{item.title}</h4>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[0.95rem] text-muted">
            Adults 18+. Treatment is in person at our Houston office. A physician evaluation
            confirms whether TMS is a safe and appropriate fit for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SessionPhoto() {
  return (
    <div className="tms-photo-wrap">
      <div className="tms-photo">
        <Image
          src={IMAGES.tmsSession}
          alt="Smiling patient seated in a TMS treatment chair talking with her clinician"
          fill
          sizes="(min-width: 1024px) 600px, 95vw"
          quality={95}
          className="object-cover object-[42%_35%]"
        />
      </div>

      <span className="tms-chip">
        <span className="live-dot" aria-hidden />
        {DEVICE_NAME} technology
      </span>

      <div className="tms-course-card">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gold-soft">
          A typical TMS course
        </p>
        <p className="mt-1.5 font-display text-2xl font-semibold leading-tight text-white">
          5 days a week, <span className="italic text-gold-soft">about 6 weeks</span>
        </p>
        <p className="mt-2 flex items-center gap-2 text-[0.95rem] text-white/70">
          <CarIcon className="h-4 w-4 text-gold-soft" />
          Awake, comfortable, drive yourself home
        </p>
      </div>
    </div>
  );
}
