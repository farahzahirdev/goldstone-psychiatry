import Logo from "@/components/Logo";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  SERVICE_AREA,
  EMAIL,
  EMAIL_HREF,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_NAME,
  WEBSITE_URL,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-ink pb-10 pt-16 text-white/70">
      <div className="container-main">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" size="lg" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
              Physician-led psychiatry and TMS therapy for adults in Greater Houston. Accepting new
              patients.
            </p>
          </div>

          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">Contact</p>
            <ul className="mt-4 space-y-3 text-[0.95rem]">
              <li>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                  <PhoneIcon /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="inline-flex items-center gap-2.5 transition-colors hover:text-white">
                  <MailIcon /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">Office</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex gap-2.5 text-[0.95rem] transition-colors hover:text-white"
            >
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </span>
            </a>
            <p className="mt-3 max-w-xs text-[0.95rem] leading-relaxed text-white/60">{SERVICE_AREA}</p>
          </div>
        </div>

        <div className="space-y-3 pt-8 text-sm leading-relaxed text-white/50">
          <p>
            <strong className="text-white/80">Emergency notice:</strong> If you are in crisis, call or
            text 988 or call 911. Goldstone Psychiatry does not provide emergency care.
          </p>
          <p>
            A Good Faith Estimate of expected charges is available on request. TMS results vary and
            eligibility is determined by a physician evaluation. Insurance coverage depends on your
            plan and medical criteria.
          </p>
          <div className="flex flex-col justify-between gap-2 pt-2 sm:flex-row">
            <p>
              © {year} {SITE_NAME}. All rights reserved.
            </p>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              goldstonepsychiatry.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
