"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { certifications } from "@/lib/data";
import SectionBg from "./SectionBg";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const INITIAL = 12;

type Cert = (typeof certifications)[number];

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<Cert | null>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  useEffect(() => setMounted(true), []);

  const visible = expanded ? certifications : certifications.slice(0, INITIAL);

  const openCert = (c: Cert) => {
    window.clearTimeout(closeTimer.current);
    setActive(c);
    setOpen(true);
  };

  const close = useCallback(() => {
    setOpen(false);
    closeTimer.current = window.setTimeout(() => setActive(null), 300);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [open, close]);

  return (
    <section id="certs" className="section">
      <SectionBg />
      <div className="wrap">
        <Reveal>
          <div>
            <p className="eyebrow">05 — Credentials</p>
            <h2 className="h2">
              Courses &amp;
              <br />
              Certifications
            </h2>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-14 grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.05}
        >
          {visible.map((c) => (
            <RevealItem key={c.title} className="card cert-card">
              <button
                type="button"
                className="cert-card-btn"
                onClick={() => openCert(c)}
                aria-label={`View ${c.title} certificate`}
              >
                <span className="block text-[17px] font-bold leading-snug">
                  {c.title}
                </span>
                <span className="eyebrow mt-2.5 block">{c.meta}</span>
                <span className="cert-view" aria-hidden>
                  View certificate
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>

        {certifications.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="btn"
            >
              {expanded
                ? "Show less"
                : `See more (${certifications.length - INITIAL})`}
            </button>
          </div>
        )}
      </div>

      {mounted &&
        createPortal(
          <div
            className="cert-preview"
            data-open={open ? "true" : "false"}
            role="dialog"
            aria-modal="true"
            onClick={close}
          >
            <div
              className="cert-preview-panel"
              onClick={(e) => e.stopPropagation()}
            >
              {active && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={active.image}
                    alt={`${active.title} certificate`}
                  />
                  <div className="cert-preview-cap">
                    <span>{active.title}</span>
                    <span className="opacity-60"> — {active.meta}</span>
                  </div>
                  <button
                    type="button"
                    className="cert-preview-close"
                    onClick={close}
                    aria-label="Close"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
