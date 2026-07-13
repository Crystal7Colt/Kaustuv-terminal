"use client";

export default function Footer({ amber, onToggle }) {
  const bootDate = new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="footer">
      <div>sys://personal_terminal &mdash; last boot {bootDate}</div>
      <div className="flinks">
        <a href="#">github</a>
        <a href="#">twitter/x</a>
        <a href="#">linkedin</a>
      </div>
      <div className="toggle-wrap">
        <span>amber mode</span>
        <div
          className="toggle"
          role="switch"
          aria-checked={amber}
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
        >
          <i />
        </div>
      </div>
    </div>
  );
}
