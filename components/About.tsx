import { about, stats } from "@/lib/data";
import SectionBg from "./SectionBg";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionBg />
      <div className="wrap grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">01 — About</p>
            <h2 className="h2">
              Who
              <br />
              I am
            </h2>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="lead">{about.paragraphs[0]}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5 opacity-70">{about.paragraphs[1]}</p>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <RevealItem
                key={s.label}
                className="border-l-2 border-ink py-1.5 pl-[18px]"
              >
                <div className="text-[40px] font-extrabold leading-none">
                  {s.value}
                  {s.suffix ?? ""}
                </div>
                <div className="eyebrow mt-2">{s.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
