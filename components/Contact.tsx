import { profile } from "@/lib/data";
import SectionBg from "./SectionBg";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionBg />
      <div className="wrap text-center">
        <Reveal>
          <p className="eyebrow">07 — Contact</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="h2 mx-auto text-[clamp(52px,10vw,110px)]">
            Let&rsquo;s build
            <br />
            something
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-solid mt-9 text-[15px]"
            style={{ padding: "20px 34px" }}
          >
            {profile.email}
          </a>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap justify-center gap-7 text-[12px] uppercase tracking-[0.2em] opacity-60">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub — {profile.githubHandle}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn — {profile.linkedinHandle}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
