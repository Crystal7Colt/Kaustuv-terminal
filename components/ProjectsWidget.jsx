"use client";

import { useState } from "react";
import { projects } from "@/lib/content";

const pad = (n) => (n < 10 ? `0${n}` : `${n}`);

export default function ProjectsWidget() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <div className="win cell-projects" id="projects">
      <div className="win-title">
        <span>&gt; ls ./projects</span>
        <span className="chrome">
          <span>_</span>
          <span>&times;</span>
        </span>
      </div>
      <div className="win-body">
        <div className="proj-thumb">
          {project.status === 100 ? "shipped" : `in progress \u00B7 ${project.status}%`}
        </div>
        <div className="proj-title">{project.title}</div>
        <div className="proj-desc">{project.desc}</div>
        <div className="proj-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="scrub">
          <i style={{ width: `${project.status}%` }} />
        </div>
        <div className="proj-controls">
          <div className="navbtns">
            <button onClick={prev} aria-label="previous project">
              &lt; prev
            </button>
            <button onClick={next} aria-label="next project">
              next &gt;
            </button>
          </div>
          <a className="visit" href={project.link} target="_blank" rel="noopener noreferrer">
            open &#8599;
          </a>
        </div>
        <div className="proj-index">
          {pad(index + 1)} / {pad(projects.length)}
        </div>
      </div>
    </div>
  );
}
