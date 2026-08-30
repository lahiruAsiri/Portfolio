/** Ambient low-opacity black decoration for the white sections. */
export default function SectionBg() {
  return (
    <>
      <div aria-hidden className="section-bg" />
      <svg
        aria-hidden
        className="section-orbit"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle cx="100" cy="100" r="97" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="64" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="31" stroke="currentColor" strokeWidth="0.4" />
        <path d="M100 2v196M2 100h196" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    </>
  );
}
