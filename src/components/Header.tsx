"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  DOCTOR_SECTION_ID,
  FAQ_SECTION_ID,
  FORM_SECTION_ID,
  INSURANCE_SECTION_ID,
  PHONE_DISPLAY,
  PHONE_HREF,
  REVIEWS_SECTION_ID,
  SITE_NAME,
  STEPS_SECTION_ID,
  TMS_SECTION_ID,
  WHY_SECTION_ID,
} from "@/lib/constants";
import { ArrowIcon, MenuIcon, PhoneIcon, XIcon } from "@/components/Icons";
import Logo from "@/components/Logo";

const NAV_ITEMS = [
  { id: TMS_SECTION_ID, label: "TMS Therapy" },
  { id: WHY_SECTION_ID, label: "Why Goldstone" },
  { id: INSURANCE_SECTION_ID, label: "Insurance" },
  { id: STEPS_SECTION_ID, label: "How It Works" },
  { id: DOCTOR_SECTION_ID, label: "Dr. Anugwom" },
  { id: REVIEWS_SECTION_ID, label: "Reviews" },
] as const;

const MOBILE_EXTRA = [{ id: FAQ_SECTION_ID, label: "FAQ" }] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [panelTop, setPanelTop] = useState(72);
  const [headerHeight, setHeaderHeight] = useState(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollLockY = useRef(0);
  const pendingHash = useRef<string | null>(null);

  const measureHeader = () => {
    if (!headerRef.current) return;
    const rect = headerRef.current.getBoundingClientRect();
    setHeaderHeight(Math.ceil(rect.height));
    setPanelTop(Math.ceil(rect.bottom + 8));
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy for active nav link
  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    measureHeader();
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
      measureHeader();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return;
    measureHeader();

    scrollLockY.current = window.scrollY;
    const { body, documentElement } = document;
    const prev = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      htmlOverflow: documentElement.style.overflow,
      scrollBehavior: documentElement.style.scrollBehavior,
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollLockY.current}px`;
    body.style.width = "100%";
    documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        pendingHash.current = null;
        setOpen(false);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      pendingHash.current = null;
      setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      const y = scrollLockY.current;
      const hash = pendingHash.current;
      pendingHash.current = null;

      documentElement.style.scrollBehavior = "auto";
      body.style.overflow = prev.overflow;
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.width = prev.width;
      documentElement.style.overflow = prev.htmlOverflow;
      window.scrollTo({ top: y, left: 0, behavior: "auto" });

      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);

      requestAnimationFrame(() => {
        documentElement.style.scrollBehavior = prev.scrollBehavior;
        if (!hash) return;
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };
  }, [open]);

  const close = () => {
    pendingHash.current = null;
    setOpen(false);
  };

  const goTo = (id: string) => {
    pendingHash.current = id;
    setOpen(false);
  };

  const mobileMenu =
    mounted &&
    open &&
    createPortal(
      <>
        <button type="button" className="mobile-nav-backdrop" aria-label="Close menu" onClick={close} />
        <div
          ref={panelRef}
          id="mobile-nav"
          className="mobile-nav-panel"
          style={{ top: panelTop }}
          aria-label="Mobile navigation"
        >
          <p className="mobile-nav-label">Menu</p>
          {[...NAV_ITEMS, ...MOBILE_EXTRA].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="mobile-nav-link"
              onClick={(event) => {
                event.preventDefault();
                goTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid gap-2">
            <a
              href={`#${FORM_SECTION_ID}`}
              className="btn btn-gold w-full"
              onClick={(event) => {
                event.preventDefault();
                goTo(FORM_SECTION_ID);
              }}
            >
              Find Out If You Qualify
              <ArrowIcon />
            </a>
            <a href={PHONE_HREF} className="btn btn-outline w-full" onClick={close}>
              <PhoneIcon />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </>,
      document.body,
    );

  return (
    <>
      {open ? <div style={{ height: headerHeight }} aria-hidden /> : null}
      <header
        ref={headerRef}
        className={`site-header${solid ? " is-solid" : ""}${open ? " is-menu-open" : ""}`}
      >
        <div className="container-main flex items-center justify-between gap-4 py-3">
          <a
            href="#top"
            className="group relative z-[80] flex shrink-0 items-center gap-2.5"
            onClick={(event) => {
              event.preventDefault();
              close();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label={`${SITE_NAME} home`}
          >
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-5 whitespace-nowrap text-[0.82rem] font-medium min-[1100px]:flex xl:gap-7"
            aria-label="Main"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link${active === item.id ? " is-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 min-[1100px]:flex">
            <a href={PHONE_HREF} className="btn btn-outline btn-sm">
              <PhoneIcon className="h-3.5 w-3.5" />
              {PHONE_DISPLAY}
            </a>
            <a href={`#${FORM_SECTION_ID}`} className="btn btn-gold btn-sm">
              Find Out If You Qualify
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="mobile-nav-toggle relative inline-flex z-[80] min-[1100px]:hidden"
            onClick={() => {
              pendingHash.current = null;
              setOpen((prev) => !prev);
            }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {mobileMenu}
    </>
  );
}
