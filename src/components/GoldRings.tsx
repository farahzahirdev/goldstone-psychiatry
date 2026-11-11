/** Concentric gold rings echoing the brand art. Place inside a `relative overflow-hidden` section. */
export default function GoldRings({ corner }: { corner: "top-right" | "bottom-left" }) {
  const pos =
    corner === "top-right"
      ? "-right-40 -top-40"
      : "-bottom-40 -left-40";
  return (
    <svg
      className={`pointer-events-none absolute ${pos} -z-10 h-[420px] w-[420px] opacity-60 sm:h-[560px] sm:w-[560px]`}
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden
    >
      {[120, 170, 220, 255].map((r) => (
        <circle key={r} cx="260" cy="260" r={r} stroke="#c49a54" strokeWidth="1.2" />
      ))}
    </svg>
  );
}
