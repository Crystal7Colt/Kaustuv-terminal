"use client";

import { useEffect, useState } from "react";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

export default function ClockWidget() {
  const [now, setNow] = useState(null);
  const [uptimeSecs, setUptimeSecs] = useState(0);
  const [tz, setTz] = useState("--");

  useEffect(() => {
    const start = Date.now();
    setNow(new Date());
    try {
      setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || "--");
    } catch {
      setTz("--");
    }

    const id = setInterval(() => {
      setNow(new Date());
      setUptimeSecs(Math.floor((Date.now() - start) / 1000));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const timeStr = now
    ? `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
    : "00:00:00";
  const dateStr = now
    ? `${DAYS[now.getDay()]} \u00B7 ${now.toLocaleDateString(undefined, {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })}`
    : "loading date...";
  const uptimeStr = `${pad(Math.floor(uptimeSecs / 60))}:${pad(uptimeSecs % 60)}`;

  return (
    <div className="win cell-clock">
      <div className="win-title">
        <span>&gt; sys.clock</span>
        <span className="chrome">
          <span>_</span>
          <span>&times;</span>
        </span>
      </div>
      <div className="win-body">
        <div className="clockwrap">
          <div>
            <div className="clock-big">{timeStr}</div>
            <div className="clock-date">{dateStr}</div>
          </div>
          <div className="clock-meta">
            <div>
              <b>{tz}</b>
              <br />
              local timezone
            </div>
            <div>
              session uptime: <b>{uptimeStr}</b>
              <div className="meterbar">
                <i style={{ width: `${Math.min(100, uptimeSecs)}%` }} />
              </div>
            </div>
            <div>
              status: <b style={{ color: "var(--accent)" }}>online</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
