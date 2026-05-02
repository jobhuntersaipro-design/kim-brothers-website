"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type RevealState = "idle" | "pending" | "shown";

type Result<T> = {
  ref: RefObject<T | null>;
  state: RevealState;
};

/**
 * One-shot reveal hook. Starts as `idle` so SSR markup is fully visible
 * (no FOUC for users without JS). After mount we hand control to a single
 * IntersectionObserver — its callback is an external signal, so the
 * setState there isn't a cascading render.
 *
 * If the user prefers reduced motion, the first IO fire flips straight to
 * `shown` regardless of intersection so the content never animates in.
 *
 * Components apply `data-reveal={state}` and let CSS handle the transition.
 */
export function useReveal<T extends Element>(): Result<T> {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduceMQ.matches || entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        } else {
          setState("pending");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, state };
}
