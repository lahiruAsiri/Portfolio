"use client";

import { useState } from "react";
import { certifications } from "@/lib/data";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

const INITIAL = 12;

export default function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded
    ? certifications
    : certifications.slice(0, INITIAL);

  return (
    <section id="certs" className="section">
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
            <RevealItem key={c.title} className="card">
              <div className="text-[17px] font-bold leading-snug">{c.title}</div>
              <div className="eyebrow mt-2.5">{c.meta}</div>
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
    </section>
  );
}
