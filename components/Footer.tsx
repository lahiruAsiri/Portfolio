export default function Footer() {
  return (
    <footer className="inv py-11">
      <div className="wrap flex flex-col items-center justify-between gap-3 text-center text-[12px] uppercase tracking-[0.2em] opacity-60 md:flex-row md:text-left">
        <span>© {new Date().getFullYear()} Lahiru Asiri</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
