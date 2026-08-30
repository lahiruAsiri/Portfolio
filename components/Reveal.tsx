"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return;

    const show = () => {
      if (done.current) return;
      done.current = true;
      setSeen(true);
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show();
            io.disconnect();
            break;
          }
        }
      },
      // start the animation once the element is ~12% into the viewport
      { threshold: 0, rootMargin: "0px 0px -12% 0px" }
    );
    io.observe(el);

    // safety net only — long enough that it never pre-empts a real scroll
    const fallback = window.setTimeout(show, 6000);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return { ref, seen };
}

type TagName = "div" | "section" | "li" | "span" | "ul";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: TagName;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: RevealProps) {
  const { ref, seen } = useReveal();
  const Component = as as "div";
  return (
    <Component
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${seen ? "is-visible" : ""} ${className}`.trim()}
      style={seen && delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Component>
  );
}

/** Staggers its direct <Reveal>/<RevealItem> children. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<RevealProps>;
        const base = el.props.delay ?? 0;
        return cloneElement(el, { delay: base + i * stagger });
      })}
    </div>
  );
}

export const RevealItem = Reveal;
