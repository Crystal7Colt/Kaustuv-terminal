"use client";

import { useEffect, useState } from "react";

export default function Boot() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDismissed(true);
      return;
    }

    const dismiss = () => setDismissed(true);
    const timer = setTimeout(dismiss, 2600);
    document.addEventListener("keydown", dismiss);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", dismiss);
    };
  }, []);

  if (dismissed) return null;

  return (
    <div id="boot" onClick={() => setDismissed(true)}>
      {"INITIALIZING PERSONAL_OS v1.0...\n"}
      {"MOUNTING /home/kaustuv ...\n"}
      {"LOADING WIDGETS: console, clock, projects, contact ...\n"}
      <br />
      WELCOME.<span className="cursor" />
      <div className="skip">click / press any key to continue</div>
    </div>
  );
}
