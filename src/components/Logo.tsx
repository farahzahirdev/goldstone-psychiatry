/**
 * Text-only brand lockup in the site's brand fonts (Newsreader + Inter).
 */
export default function Logo({
  tone = "dark",
  size = "md",
}: {
  tone?: "dark" | "light";
  size?: "md" | "lg";
}) {
  const name = size === "lg" ? "text-[1.7rem]" : "text-[1.3rem] sm:text-[1.5rem]";
  const sub = size === "lg" ? "text-[0.74rem]" : "text-[0.62rem] sm:text-[0.7rem]";

  return (
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
  );
}
