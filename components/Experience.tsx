import { education, experience } from "@/lib/data";
import SectionBg from "./SectionBg";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionBg />
      <div className="wrap">
        <Reveal>
          <div>
            <p className="eyebrow">03 — Path</p>
            <h2 className="h2">Experience</h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 border-t-2 border-ink">
          {experience.map((e) => (
            <RevealItem
              key={e.role}
              className="grid gap-4 border-b border-neutral-300 py-8 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <div className="eyebrow opacity-80">
                {e.period}
                <span className="ml-2 opacity-60">· {e.length}</span>
              </div>
              <div>
                <div className="text-[24px] font-extrabold md:text-[26px]">
                  {e.role}
                </div>
                <div className="eyebrow mt-1.5">
                  {e.company} · {e.type}
                </div>
                <p className="lead mt-3.5 max-w-[640px] opacity-75">{e.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <h3 className="mt-[70px] text-[28px] font-extrabold uppercase tracking-[-0.01em] md:text-[30px]">
            Education
          </h3>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-5 md:grid-cols-2">
          {education.map((ed) => (
            <RevealItem key={ed.title} className="card">
              <div className="text-[18px] font-bold leading-snug md:text-[20px]">
                {ed.title}
              </div>
              <div className="eyebrow mt-2">
                {ed.meta}
                {ed.period ? ` · ${ed.period}` : ""}
              </div>
              <div className="lead mt-2.5 opacity-70">{ed.place}</div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
