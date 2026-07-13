import { contactLinks } from "@/lib/content";

export default function ContactWidget() {
  return (
    <div className="win cell-links" id="contact">
      <div className="win-title">
        <span>&gt; cat contact.lst</span>
        <span className="chrome">
          <span>_</span>
          <span>&times;</span>
        </span>
      </div>
      <div className="win-body">
        <div className="linklist">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              <span className="arrow">&#9656;</span> {link.label}
              <small>{link.handle}</small>
            </a>
          ))}
        </div>
        <div className="status-avail">
          <i /> open to new projects / roles
        </div>
      </div>
    </div>
  );
}
