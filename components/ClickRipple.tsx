"use client";

import { useEffect } from "react";

/**
 * A ring that expands and fades from the exact point you click. It is spawned
 * at the click coordinates and only animates scale/opacity, so it can never
 * lag or jump. The OS cursor is untouched.
 */
export default function ClickRipple() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onDown = (e: PointerEvent) => {
      const el = document.createElement("span");
      el.className = "click-ripple";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      document.body.appendChild(el);
      el.addEventListener("animationend", () => el.remove(), { once: true });
    };

    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
}
