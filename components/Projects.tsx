"use client";

import { useState } from "react";
import { profile, projects } from "@/lib/data";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";
import { ArrowUpRight } from "./icons";

const INITIAL = 6;

export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, INITIAL);

  return (
    <section id="work" className="section inv">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow">04 — Selected Work</p>
              <h2 className="h2">Projects</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              All on GitHub
            </a>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
          {visible.map((p) => {
            const links = p.repos ?? [{ label: "Repository", url: p.link }];
            return (
              <RevealItem key={p.no}>
                <div className="card card-project group h-full">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[15px] font-extrabold opacity-40">
                      {p.no}
                    </span>
                    <span className="eyebrow flex items-center gap-2">
                      {p.kind}
                    </span>
                  </div>
                  <div className="mt-4 text-[26px] font-extrabold uppercase leading-tight md:text-[30px]">
                    {p.title}
                  </div>
                  <p className="lead my-3 opacity-70">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.14em]">
                    {links.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 opacity-70 transition hover:opacity-100"
                      >
                        {r.label}
                        <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {projects.length > INITIAL && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="btn"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              {expanded
                ? "Show less"
                : `See more (${projects.length - INITIAL})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
