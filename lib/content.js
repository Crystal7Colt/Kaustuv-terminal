// ============================================================
// All editable site content lives here.
// ============================================================

export const aboutLines = [
  { p: "kaustuv@terminal:~$", t: "cat about.txt", cls: "prompt" },
  { t: "Hey, I'm Kaustuv Sharma — B.Tech CS student in New Delhi,", cls: "out" },
  { t: "GGSIPU, graduating 2028. I build ML pipelines and web apps,", cls: "out" },
  { t: "and I like poking at how AI-generated code holds up over time.", cls: "out" },
  { p: "kaustuv@terminal:~$", t: "cat focus.txt", cls: "prompt" },
  { t: "currently building at the intersection of ML and web dev.", cls: "out" },
  { p: "kaustuv@terminal:~$", t: "cat publications.txt", cls: "prompt" },
  { t: '"Recursive Decay in AI-Generated Code" — IJFMR, 2026.', cls: "out" },
  { p: "kaustuv@terminal:~$", t: "", cls: "prompt final" },
];

export const skills = [
  { label: "Python", pct: 85 },
  { label: "TS / JS", pct: 78 },
  { label: "Java / C", pct: 70 },
  { label: "ML", pct: 72 },
];

export const projects = [
  {
    title: "Recursive Decay in AI-Generated Code",
    desc: "Empirical study of how iterative LLM refactoring degrades security logic — published in IJFMR, 2026.",
    tags: ["python", "ast", "llm apis"],
    status: 100,
    link: "#",
  },
  {
    title: "Football Wonderkid Predictor",
    desc: "ML pipeline predicting 3-year market value & breakout potential from ~185K player-seasons (FIFA 15-26). R\u00B2 \u2248 0.60, ROC-AUC \u2248 0.95.",
    tags: ["python", "scikit-learn", "streamlit"],
    status: 100,
    link: "#",
  },
  {
    title: "Time Management Application",
    desc: "Productivity app with a 24-hour visual grid UI for daily scheduling, built responsive end-to-end.",
    tags: ["typescript", "next.js", "tailwind"],
    status: 100,
    link: "#",
  },
];

export const contactLinks = [
  { label: "GitHub", handle: "@handle", href: "#" },
  { label: "Twitter / X", handle: "@handle", href: "#" },
  { label: "LinkedIn", handle: "/in/handle", href: "#" },
  { label: "Email", handle: "Kanhachamp@gmail.com", href: "mailto:Kanhachamp@gmail.com" },
];
