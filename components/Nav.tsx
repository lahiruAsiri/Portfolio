"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // scroll-spy
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // close the mobile menu on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="pointer-events-none sticky top-4 z-50 -mb-[64px] flex justify-center px-3 md:top-6 md:-mb-[72px]">
      <div ref={wrapRef} className="pointer-events-auto relative w-full max-w-[calc(100vw-24px)] sm:w-auto">
        <div className="flex items-center justify-between gap-1 rounded-full bg-ink px-3 py-2 text-white shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)] md:justify-start md:pl-6">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="px-1 text-[15px] font-extrabold uppercase tracking-[0.04em] md:mr-3"
          >
            LA
          </a>

          {/* desktop links */}
          <nav className="hidden gap-0.5 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-full px-3 py-2 text-[12.5px] uppercase tracking-[0.14em] transition ${
                  active === l.href
                    ? "bg-white/15 opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.resume}
            className="ml-1 hidden rounded-full bg-white px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition hover:opacity-80 md:block"
          >
            Résumé
          </a>

          {/* mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-[2px] w-5 bg-white transition-transform duration-200 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 block h-[2px] w-5 bg-white transition-transform duration-200 ${
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
            </span>
          </button>
        </div>

        {/* mobile menu panel */}
        <div
          className={`absolute right-0 mt-2 w-56 origin-top-right overflow-hidden rounded-2xl bg-ink p-2 text-white shadow-[0_18px_50px_-12px_rgba(0,0,0,0.45)] transition md:hidden ${
            open
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-[13px] uppercase tracking-[0.16em] transition ${
                  active === l.href
                    ? "bg-white/15 opacity-100"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-white px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-ink"
            >
              Résumé
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
