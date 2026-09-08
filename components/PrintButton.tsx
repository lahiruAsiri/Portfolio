"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print fixed right-5 top-5 z-50 rounded-full border border-ink bg-ink px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:opacity-80"
    >
      Download PDF
    </button>
  );
}
