import Image from "next/image";
import BrainNerves from "@/components/BrainNerves";
import CountUp from "@/components/CountUp";
import { ArrowIcon, CheckIcon, PhoneIcon, StarIcon } from "@/components/Icons";
import { FORM_SECTION_ID, IMAGES, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

const LINE_1 = "Depression that hasn't".split(" ");
const LINE_2 = "responded to medication?".split(" ");
const LINE_3 = "There's another way.".split(" ");

const CARD_POINTS = [
  { title: "Most plans & Medicare", body: "Cover TMS for qualifying patients" },
  { title: "We handle prior authorization", body: "Insurance verified before your first visit" },
  { title: "60-minute first evaluation", body: "With a physician. Now accepting new patients" },
] as const;

const STATS = [
  { value: 60, suffix: " min", label: "first evaluation" },
  { value: 30, prefix: "20-", suffix: " min", label: "follow-ups" },
  { value: 1, suffix: " day", label: "reply time" },
] as const;

export default function Hero() {
  let n = 0;
  const words = (list: string[], accent = false) =>
    list.map((w) => {
      const delay = 0.15 + n++ * 0.06;
      return (
        <span key={`${w}-${n}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span
            className={`hero-word${accent ? " italic text-gold-soft" : ""}`}
            style={{ animationDelay: `${delay}s` }}
          >
            {w}
          </span>
          {" "}
        </span>
      );
    });

  return (
    <section id="top" className="hero">
      <HeroBackdrop />

      {/* Glowing brain, anchored to the far right edge (desktop) */}
      <div className="hero-brain" aria-hidden>
        <Image src={IMAGES.brain} alt="" fill priority quality={90} sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-left" />
        <BrainNerves />
      </div>

      <div className="container-main relative grid items-center gap-12 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:min-h-[clamp(700px,calc(100svh-148px),860px)] lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:pb-28 lg:pt-20">
        {/* Left: message (centred on mobile/tablet, left-aligned on desktop) */}
        <div className="text-center lg:text-left">
          <div className="hero-fade flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start" style={{ animationDelay: "0.05s" }}>
            <span className="hero-tag">TMS Therapy · Houston, TX</span>
            <span className="inline-flex items-center gap-2 text-[0.95rem] text-white/75">
              <span className="live-dot" aria-hidden />
              Accepting new patients
            </span>
          </div>

          {/* Phones: lines 1-2 flow as one sentence (fixed breaks made a narrow
              2-words-per-line column). sm+: the designed three-line layout. */}
          <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl sm:leading-[1.08] xl:text-[3.3rem]">
            <span className="sm:block">{words(LINE_1)}</span>
            <span className="sm:block">{words(LINE_2)}</span>
            <span className="mt-1 block sm:mt-0">{words(LINE_3, true)}</span>
          </h1>

          <p
            className="hero-fade mx-auto mt-6 max-w-xl text-[1.08rem] leading-relaxed text-white/75 lg:mx-0"
            style={{ animationDelay: "0.8s" }}
          >
            Physician-led, personalized TMS therapy for treatment-resistant depression. No
            medication, no anesthesia, no downtime. Drive yourself home.
          </p>

          <div
            className="hero-fade mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            style={{ animationDelay: "0.95s" }}
          >
            <a href={`#${FORM_SECTION_ID}`} className="btn btn-gold w-full px-7 py-4 text-[0.95rem] sm:w-auto">
              Find Out If You Qualify
              <ArrowIcon />
            </a>
            <a href={PHONE_HREF} className="btn btn-outline-gold w-full px-7 py-4 text-[0.95rem] sm:w-auto">
              <PhoneIcon />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div
            className="hero-fade mt-10 border-t border-white/12 pt-7"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-start">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-start">
                <span className="flex gap-0.5 text-gold">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <p className="text-[0.95rem] text-white/70">
                  <strong className="font-semibold text-white">Excellent</strong> · Google reviews
                </p>
              </div>

            </div>

            <dl className="hero-stats mx-auto mt-7 grid max-w-xl grid-cols-3 lg:mx-0">
              {STATS.map((s) => (
                <div key={s.label} className="lg:pr-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block whitespace-nowrap font-display text-[1.35rem] font-semibold leading-none text-gold-soft sm:text-3xl">
                      <CountUp to={s.value} prefix={"prefix" in s ? s.prefix : ""} suffix={s.suffix} />
                    </span>
                    <span className="mt-1.5 block text-sm text-white/60">{s.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Right: TMS inquiry card (frosted glass over the brain image) */}
        <div className="relative lg:pl-6">
          <div className="hero-fade elig-card mx-auto max-w-md p-7 sm:p-9" style={{ animationDelay: "0.55s" }}>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">TMS inquiry</p>
            <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight sm:text-3xl">
              See if TMS is right for you
            </h2>
            <p className="mt-2.5 text-[0.98rem] leading-relaxed text-muted">
              Takes about a minute. No medical details needed. We reply within one business day.
            </p>

            <ul className="elig-list mt-6 space-y-3">
              {CARD_POINTS.map((p) => (
                <li key={p.title}>
                  <span className="check-dot mt-0.5 h-6 w-6">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy-ink">{p.title}</span>
                    <span className="block text-[0.92rem] text-muted">{p.body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a href={`#${FORM_SECTION_ID}`} className="btn btn-ink-gold mt-7 w-full py-4 text-[0.95rem]">
              Check my eligibility
              <ArrowIcon />
            </a>
            <p className="mt-4 text-center text-[0.95rem] text-muted">
              or call{" "}
              <a href={PHONE_HREF} className="font-semibold text-navy-ink hover:text-gold-deep">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const DOTS = [
  { cx: 22, cy: 12, d: "0s" },
  { cx: 41, cy: 6, d: "1.2s" },
  { cx: 8, cy: 30, d: "2.1s" },
  { cx: 54, cy: 22, d: "0.6s" },
  { cx: 33, cy: 78, d: "1.8s" },
  { cx: 47, cy: 88, d: "2.8s" },
  { cx: 92, cy: 70, d: "0.9s" },
  { cx: 66, cy: 9, d: "3.2s" },
];

function HeroBackdrop() {
  return (
    <div aria-hidden>
      <span className="aurora aurora-blue" />
      <span className="aurora aurora-gold" />
      <span className="aurora aurora-deep" />

      {/* Gold arcs, top right */}
      <svg className="hero-arcs -right-40 -top-56 h-[640px] w-[640px] sm:-right-24" viewBox="0 0 640 640" fill="none">
        {[170, 230, 290].map((r, i) => (
          <circle
            key={r}
            className="arc-draw"
            cx="400"
            cy="240"
            r={r}
            stroke="#c49a54"
            strokeOpacity={0.7 - i * 0.15}
            strokeWidth="1.6"
            style={{ animationDelay: `${0.3 + i * 0.25}s` }}
          />
        ))}
      </svg>

      {/* White arcs, bottom left */}
      <svg className="hero-arcs -bottom-48 -left-48 h-[460px] w-[460px]" viewBox="0 0 460 460" fill="none">
        {[150, 200].map((r, i) => (
          <circle
            key={r}
            className="arc-draw"
            cx="230"
            cy="230"
            r={r}
            stroke="#ffffff"
            strokeOpacity={0.22 - i * 0.08}
            strokeWidth="1.4"
            style={{ animationDelay: `${0.6 + i * 0.25}s` }}
          />
        ))}
      </svg>

      {/* Gold particles */}
      {DOTS.map((d) => (
        <span
          key={`${d.cx}-${d.cy}`}
          className="twinkle absolute -z-10 h-1 w-1 rounded-full bg-gold-soft"
          style={{ left: `${d.cx}%`, top: `${d.cy}%`, animationDelay: d.d }}
        />
      ))}

      {/* Soft curve into the next section */}
      <svg className="hero-curve" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <defs>
          <linearGradient id="curve-gold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#9e7533" />
            <stop offset="30%" stopColor="#e9cf98" />
            <stop offset="55%" stopColor="#c49a54" />
            <stop offset="80%" stopColor="#f0dcae" />
            <stop offset="100%" stopColor="#9e7533" />
          </linearGradient>
        </defs>
        <path d="M0 64V34C240 6 480 0 720 10s480 34 720 24v30H0Z" fill="#fffdf7" />
        {/* Gold double rule (like the logo), revealed left to right */}
        <g className="curve-draw" fill="none" stroke="url(#curve-gold)">
          <path
            d="M0 26C240 -2 480 -8 720 2s480 34 720 24"
            strokeOpacity="0.55"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0 34C240 6 480 0 720 10s480 34 720 24"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
}
