import { useEffect } from "react";

export const useScrollFreeze = (isMenuOpen) => {
  useEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      null; // document.body.style.overflow = original;
    };
  }, [isMenuOpen]);
};

// For nav menu used
