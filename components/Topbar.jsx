export default function Topbar() {
  return (
    <div className="topbar">
      <div className="logo">
        kaustuv_sharma<span className="dot">_</span>
      </div>
      <nav className="navlinks">
        <a href="#console">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </nav>
      <div className="statuslights">
        <span>
          <i className="on" />
          CNSL
        </span>
        <span>
          <i className="on" />
          CLCK
        </span>
        <span>
          <i className="on" />
          PROJ
        </span>
        <span>
          <i className="on" />
          LNKS
        </span>
      </div>
    </div>
  );
}
