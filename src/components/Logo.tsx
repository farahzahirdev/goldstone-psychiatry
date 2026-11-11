/* eslint-disable @next/next/no-img-element */
import { LOGO_MARK_URL } from "@/lib/constants";

/**
 * Crisp brand lockup: vector GP mark (rebuilt from the original DejaVu Serif Bold artwork)
 * plus the wordmark as live text in the site's own brand fonts (Newsreader + Inter).
 */
export default function Logo({
  tone = "dark",
  size = "md",
}: {
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  const mark = size === "lg" ? "h-12 w-12" : "h-10 w-10 sm:h-11 sm:w-11";
  const name = size === "lg" ? "text-[1.55rem]" : "text-[1.22rem] sm:text-[1.4rem]";
  const sub = size === "lg" ? "text-[0.62rem]" : "text-[0.52rem] sm:text-[0.6rem]";

  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      <img
        src={LOGO_MARK_URL}
        alt=""
        width={44}
        height={44}
        className={`${mark} shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-medium tracking-[-0.01em] ${name} ${
            tone === "dark" ? "text-navy-ink" : "text-white"
          }`}
        >
          Goldstone Psychiatry
        </span>
        <span
          className={`mt-1 font-sans font-semibold uppercase tracking-[0.2em] ${sub} ${
            tone === "dark" ? "text-gold-deep" : "text-gold-soft"
          }`}
        >
          &amp; Neuromodulation Center
        </span>
      </span>
    </span>
  );
}
