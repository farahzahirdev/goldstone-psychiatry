export const SITE_NAME = "Goldstone Psychiatry & Neuromodulation Center";
export const SITE_SHORT = "Goldstone Psychiatry";


export const IMAGES = {
  doctor: "/images/team/dr-anugwom.webp",
  brain: "/images/hero-brain.webp",
  tmsSession: "/images/tms-session.webp",
  brainSteps: "/images/brain-steps.webp",
  reviewsBg: "/images/reviews-brain.webp",
  og: "/images/og-image.png",
} as const;

/* Section ids */
export const FORM_SECTION_ID = "qualify";
export const TMS_SECTION_ID = "tms";
export const WHY_SECTION_ID = "why-goldstone";
export const INSURANCE_SECTION_ID = "insurance";
export const STEPS_SECTION_ID = "how-it-works";
export const DOCTOR_SECTION_ID = "dr-anugwom";
export const REVIEWS_SECTION_ID = "reviews";
export const FAQ_SECTION_ID = "faq";

/* GHL form (inline variant of the provided sticky sidebar embed) */
export const FORM_ID = "xjZVdjE2XJmBNY0D8lTk";
export const FORM_IFRAME_ID = "inline-xjZVdjE2XJmBNY0D8lTk";
export const FORM_NAME = "TMS: New Web Inquiry + Params";
export const FORM_HEIGHT = "2082";

/* Twilio tracking number (use on LP instead of office line) */
export const PHONE_DISPLAY = "(346) 517-7408";
export const PHONE_HREF = "tel:+13465177408";

export const EMAIL = "info@goldstonepsychiatry.com";
export const EMAIL_HREF = "mailto:info@goldstonepsychiatry.com";
export const WEBSITE_URL = "https://www.goldstonepsychiatry.com";

export const ADDRESS_LINE_1 = "3120 Southwest Fwy, Ste. 617";
export const ADDRESS_LINE_2 = "Houston, TX 77098";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Goldstone+Psychiatry+3120+Southwest+Fwy+Ste+617+Houston+TX+77098";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Goldstone+Psychiatry+%26+Neuromodulation+Center+Houston+reviews";

export const DEVICE_NAME = "CloudTMS";

export const DOCTOR = {
  name: "Dr. Gibson Anugwom, MD",
  shortName: "Dr. Anugwom",
  title: "Founder & Clinical Director",
  role: "Interventional and Adult Psychiatrist",
  training: "Baylor College of Medicine",
  focus:
    "TMS for treatment-resistant depression; adult depression, anxiety, bipolar spectrum, ADHD, and PTSD",
  approach:
    "Dr. Anugwom blends comprehensive outpatient psychiatry with advanced interventional expertise. The approach emphasizes diagnostic precision, individualized treatment planning, and a measured, evidence-based path through complex and treatment-resistant conditions.",
} as const;

/* Service area (brief: River Oaks, Montrose, West U, Bellaire, Galleria/Uptown, Heights + suburbs) */
export const SERVICE_AREA =
  "Serving adults across River Oaks, Montrose, West University, Bellaire, Galleria, Uptown, The Heights, and surrounding Greater Houston communities.";

export const HERO_STATS = [
  { value: 60, suffix: " min", label: "First physician evaluation" },
  { value: 30, prefix: "20-", suffix: " min", label: "Focused follow-ups" },
  { value: 1, suffix: " day", label: "Typical reply time" },
] as const;

export const NO_LIST = ["No medication", "No anesthesia", "No IV", "No downtime"] as const;

export const WHO_IT_HELPS = [
  {
    title: "Treatment-resistant depression",
    body: "You have tried two or more antidepressants and still do not feel like yourself.",
  },
  {
    title: "Anxious depression",
    body: "Low mood tangled up with constant worry, tension, or restlessness.",
  },
  {
    title: "OCD",
    body: "Intrusive thoughts and compulsions that have not eased with standard care.",
  },
  {
    title: "Medication side effects",
    body: "Weight gain, fatigue, or emotional numbness that made medication hard to stay on.",
  },
] as const;

export const WHY_ITEMS = [
  {
    icon: "stethoscope",
    title: "Physician-led, never a mill",
    body: "Your plan is designed and overseen by a psychiatrist, not handed off to a high-volume assembly line.",
  },
  {
    icon: "award",
    title: "Baylor-trained expertise",
    body: "Founded by Dr. Gibson Anugwom, an interventional psychiatrist trained at Baylor College of Medicine.",
  },
  {
    icon: "target",
    title: "Personalized protocols",
    body: "Treatment targeting and session plans are tailored to your history, symptoms, and goals.",
  },
  {
    icon: "clock",
    title: "Time that feels unhurried",
    body: "A full 60-minute first evaluation and 20 to 30 minute follow-ups, in a small-practice setting.",
  },
  {
    icon: "shield",
    title: "Insurance handled for you",
    body: "We verify benefits before your first visit and manage prior authorization from start to finish.",
  },
  {
    icon: "layers",
    title: "Options beyond TMS",
    body: "If TMS is not the right fit, Spravato® and ketamine options can be part of your care pathway.",
  },
] as const;

export const INSURANCE_CARRIERS = [
  "Medicare",
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "Carelon Behavioral Health",
  "Curative",
  "TriWest Healthcare Alliance",
  "Meritain Health",
] as const;

export const INSURANCE_POINTS = [
  {
    title: "Benefits verified first",
    body: "We confirm your coverage before your first visit, so there are no surprises.",
  },
  {
    title: "Prior authorization, handled",
    body: "Our team prepares and submits the paperwork your plan requires for TMS.",
  },
  {
    title: "Clear self-pay pricing",
    body: "Prefer not to use insurance? You get transparent, upfront pricing. A Good Faith Estimate is available on request.",
  },
] as const;

export const STEPS = [
  {
    title: "Find out if you qualify",
    body: "Complete the short form or call us. We reply within one business day.",
  },
  {
    title: "Insurance verified",
    body: "We check your benefits and walk you through costs before you ever come in.",
  },
  {
    title: "Physician evaluation",
    body: "A 60-minute visit with a psychiatrist to confirm TMS is right for you. Prior authorization follows.",
  },
  {
    title: "Begin TMS",
    body: "Brief in-office sessions, typically five days a week for about six weeks. Drive yourself home after.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What does a TMS session feel like?",
    answer:
      "You stay awake and comfortable in a treatment chair. Most people describe a tapping sensation on the scalp. There is no anesthesia, no IV, and no recovery time, so you can drive yourself home or go back to work.",
  },
  {
    question: "Will my insurance cover TMS?",
    answer:
      "Most commercial insurance plans and Medicare cover standard TMS for qualifying patients with major depressive disorder. Prior authorization is usually required, and our team handles that process for you.",
  },
  {
    question: "How long does treatment take?",
    answer:
      "A standard course is typically five days a week for about six weeks. Your physician will review the protocol that fits your situation during the evaluation.",
  },
  {
    question: "Is TMS safe?",
    answer: `TMS is non-invasive and delivered with ${DEVICE_NAME} technology. Serious side effects such as seizure are rare, and every patient is carefully screened before starting.`,
  },
  {
    question: "What if TMS is not the right fit for me?",
    answer:
      "Your evaluation looks at your whole picture. If TMS is not the best option, we can discuss Spravato®, ketamine, or other psychiatric care.",
  },
  {
    question: "Do you offer TMS by telehealth?",
    answer:
      "TMS is delivered in person at our Houston office on the Southwest Freeway. Some follow-up psychiatric visits may be available by telehealth.",
  },
] as const;
