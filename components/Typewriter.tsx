"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
  startDelay?: number;
  restartDelay?: number;
  className?: string;
};

export default function Typewriter({
  text,
  typeSpeed = 95,
  deleteSpeed = 45,
  holdTime = 5000,
  startDelay = 550,
  restartDelay = 550,
  className = "",
}: Props) {
  // Server / first paint renders the full name (good for crawlers); the
  // client blanks it and types it out. The wrapping <Reveal> keeps this
  // hidden during the swap so there is no visible flash.
  const [out, setOut] = useState(text);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setOut(text);
      return;
    }

    let i = 0;
    let mode: "type" | "hold" | "delete" = "type";
    let timer: number;

    const tick = () => {
      if (mode === "type") {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          mode = "hold";
          timer = window.setTimeout(tick, holdTime);
        } else {
          timer = window.setTimeout(tick, typeSpeed);
        }
      } else if (mode === "hold") {
        mode = "delete";
        timer = window.setTimeout(tick, deleteSpeed);
      } else {
        i -= 1;
        setOut(text.slice(0, Math.max(0, i)));
        if (i <= 0) {
          mode = "type";
          timer = window.setTimeout(tick, restartDelay);
        } else {
          timer = window.setTimeout(tick, deleteSpeed);
        }
      }
    };

    setOut("");
    timer = window.setTimeout(tick, startDelay);
    return () => window.clearTimeout(timer);
  }, [text, typeSpeed, deleteSpeed, holdTime, startDelay, restartDelay]);

  return (
    <span className={className} style={{ whiteSpace: "pre" }} aria-label={text}>
      <span aria-hidden="true">{out}</span>
      <span aria-hidden="true" className="tw-caret">
        /
      </span>
    </span>
  );
}
