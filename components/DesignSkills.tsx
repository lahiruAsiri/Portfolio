import { designSkills } from "@/lib/data";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

export default function DesignSkills() {
  return (
    <section id="design" className="section inv">
      <div className="wrap grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <Reveal>
          <div>
            <p className="eyebrow">06 — Beyond code</p>
            <h2 className="h2">
              Design
              <br />
              Skills
            </h2>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="lead mb-8 opacity-75">
              I bridge engineering and design — building intuitive, engaging
              interfaces and generating creative concepts that meet product goals.
            </p>
          </Reveal>
          <RevealGroup className="flex flex-wrap gap-3" stagger={0.05}>
            {designSkills.map((s) => (
              <RevealItem key={s} as="span" className="tag">
                {s}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
