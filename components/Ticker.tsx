import { marquee } from "@/lib/data";

export default function Ticker() {
  const line = marquee.join("  ✷  ");
  return (
    <div className="overflow-hidden border-y border-ink py-4">
      <div className="anim-ticker flex w-max gap-11 whitespace-nowrap text-[20px] font-extrabold uppercase tracking-[0.04em]">
        <span>{line}&nbsp; ✷ &nbsp;</span>
        <span aria-hidden="true">{line}&nbsp; ✷ &nbsp;</span>
      </div>
    </div>
  );
}
