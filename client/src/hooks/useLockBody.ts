import { useEffect } from "react";

/** Prevents the page behind an overlay from scrolling while `locked` is true. */
const useLockBody = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
};

export default useLockBody;
