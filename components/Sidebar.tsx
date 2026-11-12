"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const navItems = [
  { id: "ai", label: "AI & Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
] as const;

type NavId = (typeof navItems)[number]["id"];

export function Sidebar() {
  const [active, setActive] = useState<NavId>("ai");

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: NavId = navItems[0].id;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line) {
          current = item.id;
        }
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="left-pane">
      <div>
        <div className="ai-status">
          <span className="ai-dot" aria-hidden="true" />
          <span>{site.location}</span>
        </div>
        <h1 className="site-title">
          <a href="#top">{site.name}</a>
        </h1>
        <h2 className="site-role">{site.role}</h2>
        <p className="site-tagline">{site.tagline}</p>

        <nav className="side-nav" aria-label="In-page jump links">
          <ul>
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={isActive ? "nav-link is-active" : "nav-link"}
                  >
                    <span className="nav-indicator" aria-hidden="true" />
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="social-row" aria-label="Contact links">
        <li>
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.email}`}
            title={site.email}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>Email</span>
          </a>
        </li>
        {site.github ? (
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.49 11.49 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.299 24 12c0-6.627-5.373-12-12-12Z" />
              </svg>
              <span>GitHub</span>
            </a>
          </li>
        ) : null}
        <li>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href={site.phoneHref} aria-label={`Call ${site.phone}`} title={site.phone}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>{site.phone}</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
