"use client";

import { useEffect, useState, useCallback } from "react";

const phrases = [
  "founder & builder",
  "indie hacker",
  "blockchain developer",
  "shipping products",
  "sui ecosystem builder",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export function Typewriter({ className }: { className?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      // Typing
      if (displayed.length < current.length) {
        return setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      }
      // Finished typing — pause then delete
      return setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    }

    // Deleting
    if (displayed.length > 0) {
      return setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, DELETING_SPEED);
    }

    // Finished deleting — move to next phrase
    return setTimeout(() => {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, PAUSE_AFTER_DELETE);
  }, [displayed, isDeleting, phraseIndex]);

  useEffect(() => {
    const timeout = tick();
    return () => clearTimeout(timeout);
  }, [tick]);

  return (
    <span className={className}>
      // {displayed}
      <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] bg-accent" />
    </span>
  );
}
