"use client";

import { useEffect, useRef, useState } from "react";
import { aboutLines, skills } from "@/lib/content";

export default function ConsoleWidget() {
  const [renderedLines, setRenderedLines] = useState([]);
  const [activeText, setActiveText] = useState("");
  const [typing, setTyping] = useState(true);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setRenderedLines(aboutLines);
      setTyping(false);
      return;
    }

    let cancelled = false;
    let lineIndex = 0;

    function typeLine() {
      if (cancelled) return;
      if (lineIndex >= aboutLines.length) {
        setTyping(false);
        return;
      }
      const entry = aboutLines[lineIndex];
      let charIndex = 0;
      setActiveText("");

      const interval = setInterval(() => {
        if (cancelled) {
          clearInterval(interval);
          return;
        }
        charIndex++;
        setActiveText(entry.t.slice(0, charIndex));
        if (charIndex >= entry.t.length) {
          clearInterval(interval);
          setRenderedLines((prev) => [...prev, entry]);
          setActiveText("");
          lineIndex++;
          setTimeout(typeLine, 160);
        }
      }, 18);
    }

    const kickoff = setTimeout(typeLine, 700);
    return () => {
      cancelled = true;
      clearTimeout(kickoff);
    };
  }, []);

  const currentEntry = aboutLines[renderedLines.length];

  return (
    <div className="win cell-console" id="console">
      <div className="win-title">
        <span>&gt; whoami</span>
        <span className="chrome">
          <span>_</span>
          <span>&times;</span>
        </span>
      </div>
      <div className="win-body">
        <div className="console-log">
          {renderedLines.map((entry, i) => (
            <div className="line" key={i}>
              {entry.p && <span className="prompt">{entry.p} </span>}
              <span className={entry.cls}>{entry.t}</span>
            </div>
          ))}
          {typing && currentEntry && (
            <div className="line">
              {currentEntry.p && <span className="prompt">{currentEntry.p} </span>}
              <span className={currentEntry.cls}>{activeText}</span>
              <span className="type-cursor" />
            </div>
          )}
        </div>

        <div className="skills">
          {skills.map((s) => (
            <div className="row" key={s.label}>
              <div className="label">{s.label}</div>
              <div className="bar">
                <i style={{ width: `${s.pct}%` }} />
              </div>
              <div className="pct">{s.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
