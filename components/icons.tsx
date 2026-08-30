type P = { className?: string };

export const ArrowRight = ({ className }: P) => (
  <svg className={className} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowDown = ({ className }: P) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const Asterisk = ({ className }: P) => (
  <svg className={className} width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
  </svg>
);

export const ArrowUpRight = ({ className }: P) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
