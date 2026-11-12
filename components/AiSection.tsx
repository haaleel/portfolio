import { aiCapabilities } from "@/content/site";

export function AiSection() {
  return (
    <section id="ai" className="content-section" aria-labelledby="ai-heading">
      <div className="sticky-section-header">
        <h2 id="ai-heading">AI &amp; Core Stack</h2>
      </div>
      <p className="section-intro">
        AI first, backed by production full-stack engineering — in plain, practical terms.
      </p>
      <ul className="card-group" aria-label="AI capabilities and skills">
        {aiCapabilities.map((cap, idx) => (
          <li key={cap.title} className="glass-card">
            <div className="card-meta">0{idx + 1} · FOCUS</div>
            <div className="card-body">
              <h3 className="card-title">{cap.title}</h3>
              <p className="card-text">{cap.summary}</p>
              <ul className="pill-list" aria-label="Technologies">
                {cap.tags.map((tag) => (
                  <li key={tag} className="pill">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
