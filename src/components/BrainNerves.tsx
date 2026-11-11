/**
 * Glitter "nerve signals" layered over the static hero brain image.
 * The image itself never moves: only these sparks travel along nerve-like paths.
 * Coordinates match the brain image (554 x 750), so the overlay lines up at every size.
 */
// Most of the left half sits behind the inquiry card on desktop, so the signals are
// concentrated on the visible right side of the brain (x > ~450).
const NERVES = [
  // brainstem / spinal cord
  { d: "M440 300C446 360 452 420 466 480S496 610 512 740", dur: 4.6, delay: 0 },
  // top of cortex, sweeping right
  { d: "M440 132C470 116 506 110 530 116S548 124 554 128", dur: 2.6, delay: 0.8 },
  // corpus callosum arc
  { d: "M430 222C462 208 496 210 522 222S546 240 554 250", dur: 3.0, delay: 1.6 },
  // parietal branch, curving down
  { d: "M478 160C490 210 500 262 510 312S528 380 554 398", dur: 3.8, delay: 0.3 },
  // occipital loop
  { d: "M500 292C520 300 538 320 546 342S552 372 554 380", dur: 2.4, delay: 2.4 },
  // toward cerebellum
  { d: "M460 400C486 404 512 414 532 430S550 448 554 456", dur: 2.8, delay: 1.2 },
  // lower network
  { d: "M452 520C474 540 494 560 514 584S540 620 554 630", dur: 3.2, delay: 2.9 },
  // mid brain cross
  { d: "M452 262C478 268 506 280 524 300S544 326 554 334", dur: 2.7, delay: 3.4 },
  // left side (visible on tablet/mobile where there is no card)
  { d: "M318 268C350 228 410 206 470 214", dur: 3.4, delay: 1.9 },
  { d: "M232 330C270 314 320 300 372 292S430 282 470 296", dur: 3.2, delay: 0.6 },
  { d: "M226 300C236 230 290 172 370 140S430 122 470 120", dur: 4.4, delay: 2.6 },
];

const NODES = [
  { x: 486, y: 292, d: 0 },
  { x: 528, y: 182, d: 1.4 },
  { x: 506, y: 392, d: 0.7 },
  { x: 470, y: 214, d: 2.1 },
  { x: 466, y: 480, d: 1.0 },
  { x: 540, y: 250, d: 2.6 },
  { x: 520, y: 330, d: 0.4 },
  { x: 498, y: 560, d: 1.8 },
  { x: 530, y: 440, d: 3.0 },
  { x: 548, y: 140, d: 2.3 },
  { x: 462, y: 150, d: 1.2 },
  { x: 512, y: 470, d: 3.4 },
  { x: 544, y: 600, d: 0.9 },
  { x: 372, y: 292, d: 2.8 },
  { x: 318, y: 268, d: 1.6 },
  { x: 268, y: 236, d: 0.2 },
];

// Fine glitter dust scattered over the visible brain area
const GLITTER = Array.from({ length: 26 }, (_, i) => {
  const r = (n: number) => ((Math.sin((i + 1) * n) * 10000) % 1 + 1) % 1;
  return { x: 440 + r(12.9898) * 112, y: 110 + r(78.233) * 560, s: 0.8 + r(37.719) * 1.4, d: r(4.1414) * 4 };
});

export default function BrainNerves() {
  return (
    <svg className="brain-nerves" viewBox="0 0 554 750" preserveAspectRatio="xMinYMid slice" aria-hidden>
      <defs>
        <linearGradient id="spark-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff6dc" />
          <stop offset="100%" stopColor="#f0c87a" />
        </linearGradient>
      </defs>

      {NERVES.map((n) => (
        <g key={n.d}>
          {/* faint resting nerve */}
          <path d={n.d} className="nerve-path" />
          {/* travelling signal */}
          <path
            d={n.d}
            pathLength={100}
            className="nerve-spark"
            style={{ animationDuration: `${n.dur}s`, animationDelay: `${n.delay}s` }}
          />
        </g>
      ))}

      {NODES.map((p) => (
        <circle
          key={`${p.x}-${p.y}`}
          cx={p.x}
          cy={p.y}
          r="2.6"
          className="nerve-node"
          style={{ animationDelay: `${p.d}s` }}
        />
      ))}

      {GLITTER.map((g) => (
        <circle
          key={`${g.x.toFixed(1)}-${g.y.toFixed(1)}`}
          cx={g.x.toFixed(1)}
          cy={g.y.toFixed(1)}
          r={g.s.toFixed(2)}
          className="nerve-glitter"
          style={{ animationDelay: `${g.d.toFixed(2)}s` }}
        />
      ))}
    </svg>
  );
}
