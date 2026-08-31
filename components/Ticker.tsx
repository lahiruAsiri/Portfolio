import { marquee } from "@/lib/data";

const SEP = "  ✷  ";

export default function Ticker() {
  // trailing separator so the end of one copy joins seamlessly onto the start
  // of the next — no gap between the two spans (that was the space before "React")
  const line = marquee.join(SEP) + SEP;
  return (
    <div className="overflow-hidden border-y border-ink py-4">
      <div className="anim-ticker flex w-max whitespace-nowrap text-[20px] font-extrabold uppercase tracking-[0.04em]">
        <span>{line}</span>
        <span aria-hidden="true">{line}</span>
      </div>
    </div>
  );
}
