"use client";

import { useEffect, useState } from "react";
import Boot from "./Boot";
import Topbar from "./Topbar";
import ConsoleWidget from "./ConsoleWidget";
import ClockWidget from "./ClockWidget";
import ProjectsWidget from "./ProjectsWidget";
import ContactWidget from "./ContactWidget";
import Footer from "./Footer";

export default function Terminal() {
  const [amber, setAmber] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("amber-mode", amber);
  }, [amber]);

  return (
    <>
      <Boot />
      <div className="crt">
        <div className="screen">
          <Topbar />
          <div className="desktop">
            <ConsoleWidget />
            <ClockWidget />
            <ProjectsWidget />
            <ContactWidget />
          </div>
          <Footer amber={amber} onToggle={() => setAmber((a) => !a)} />
        </div>
      </div>
    </>
  );
}
