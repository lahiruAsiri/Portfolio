import Image from "next/image";
import { profile, yearsSince, heroSummary } from "@/lib/data";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";
import { ArrowRight, ArrowDown, Asterisk } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 pt-20 pb-20 md:pt-32 md:pb-28">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">
              {profile.role} — {profile.location}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 block min-h-[1.75em] text-[clamp(60px,13vw,132px)] font-black uppercase leading-[0.86] tracking-[-0.04em]">
              <Typewriter text={"Lahiru\nAsiri"} />
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead mt-8 max-w-[520px]">{heroSummary()}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a href="#work" className="btn btn-solid">
                View Work <ArrowRight />
              </a>
              <a href="#contact" className="btn">
                Get in touch
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-6 text-[12px] uppercase tracking-[0.2em] opacity-60">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative mx-auto w-full max-w-[360px] md:mx-0 md:max-w-none">
            {/* Replace public/portrait.jpg with your real headshot (keep the
                name). The `portrait` class forces B/W. */}
            <div className="portrait relative aspect-[4/5] w-full overflow-hidden rounded-[26px] bg-neutral-800">
              <Image
                src="/portrait.jpg"
                alt="Lahiru Asiri"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-2 bottom-6 rounded-2xl bg-ink px-4 py-3 text-white md:-left-5 md:bottom-11 md:px-5 md:py-4">
              <div className="text-[24px] font-extrabold leading-none md:text-[28px]">
                {yearsSince()}
                <span className="text-sm font-normal"> yr</span>
              </div>
              <div className="eyebrow mt-1">In industry</div>
            </div>
            <Asterisk className="anim-spin absolute -right-2 -top-2 text-ink md:-right-3.5 md:-top-3.5" />
          </div>
        </Reveal>
      </div>

      <div className="wrap mt-16 flex items-center gap-3.5 text-[11px] uppercase tracking-[0.3em] opacity-50">
        <ArrowDown className="anim-bob" />
        Scroll to explore
      </div>
    </section>
  );
}
