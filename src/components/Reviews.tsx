import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { ArrowIcon, StarIcon } from "@/components/Icons";
import { FORM_SECTION_ID, GOOGLE_REVIEWS_URL, IMAGES, REVIEWS_SECTION_ID } from "@/lib/constants";

const VALUES = [
  {
    title: "Known by name",
    body: "A small practice where your physician knows your history.",
    icon: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" />,
  },
  {
    title: "Heard in full",
    body: "Unhurried visits, starting with a 60-minute evaluation.",
    icon: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
  },
  {
    title: "Never rushed",
    body: "Your protocol is adjusted to how you respond, not a fixed script.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
] as const;

export default function Reviews() {
  return (
    <section id={REVIEWS_SECTION_ID} className="section-padding scroll-mt-20">
      <div className="container-main grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <div className="text-center lg:text-left">
            <p className="section-label">Patient reviews</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Houston patients rate us <span className="gold-italic">Excellent.</span>
            </h2>
            <p className="text-lead mx-auto mt-5 max-w-lg lg:mx-0">
              A small, physician-led practice means care that feels personal from the very first
              call.
            </p>
          </div>

          <ul className="stagger mt-8">
            {VALUES.map((v) => (
              <li key={v.title} className="review-point">
                <span className="help-icon h-10 w-10 shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {v.icon}
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-xl font-semibold text-navy-ink">{v.title}</span>
                  <span className="mt-0.5 block leading-relaxed text-muted">{v.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`#${FORM_SECTION_ID}`} className="btn btn-gold w-full px-7 py-4 sm:w-auto">
              Find Out If You Qualify
              <ArrowIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="review-badge mx-auto max-w-md">
            <div className="review-badge-bg" aria-hidden>
              <Image
                src={IMAGES.reviewsBg}
                alt=""
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                quality={90}
                className="object-cover object-[78%_40%]"
              />
            </div>
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)]">
              <GoogleMark />
            </span>
            <p className="mt-5 text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-gold-soft">
              Google rating
            </p>

            <div className="badge-rule mt-6 w-3/4" />
            <p className="mt-6 font-display text-6xl font-semibold leading-none text-white sm:text-7xl">
              Excellent
            </p>
            <div className="mt-5 flex justify-center gap-1.5 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="star" style={{ transitionDelay: `${0.3 + i * 0.12}s` }}>
                  <StarIcon className="h-7 w-7" />
                </span>
              ))}
            </div>
            <div className="badge-rule mt-6 w-1/2" />

            <p className="mt-6 text-white/75">
              Based on{" "}
              <strong className="font-semibold text-white">
                <CountUp to={16} /> Google reviews
              </strong>
            </p>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light relative z-10 mt-7"
            >
              Read reviews on Google
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" role="img" aria-label="Google">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}
