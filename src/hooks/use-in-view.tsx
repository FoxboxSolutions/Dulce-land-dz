"use client";

import React, { useRef, useEffect, useState } from 'react';

/**
 * Custom hook to determine if an element is currently in the viewport.
 * @param options IntersectionObserver options (e.g., threshold, rootMargin, triggerOnce).
 * @returns A tuple containing the ref to attach to the element and a boolean indicating if the element is in view.
 */
export function useInView(options?: IntersectionObserverInit & { triggerOnce?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const { triggerOnce = false, ...observerOptions } = options || {};

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce) {
          observer.unobserve(entry.target);
        }
      } else if (!triggerOnce) {
        setInView(false);
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [observerOptions, triggerOnce]);

  return [ref, inView] as const;
}