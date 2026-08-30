import { stackGroups } from "@/lib/data";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Stack() {
  return (
    <section id="stack" className="section inv">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="eyebrow">02 — Toolbox</p>
              <h2 className="h2">
                Tech
                <br />
                Stack
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead max-w-[360px] opacity-70">
              The languages, frameworks and tools I reach for day to day.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g) => (
            <RevealItem key={g.title} className="card">
              <p className="eyebrow">{g.title}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {g.items.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
