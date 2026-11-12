import { roles } from "@/content/site";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="content-section"
      aria-labelledby="experience-heading"
    >
      <div className="sticky-section-header">
        <h2 id="experience-heading">Experience</h2>
      </div>
      <ol className="card-group">
        {roles.map((role) => (
          <li key={role.dates} className="glass-card">
            <header className="card-meta" aria-label={role.dates}>
              {role.dates}
            </header>
            <div className="card-body">
              <h3 className="card-title">
                {role.title} <span className="dot-sep">·</span>{" "}
                <span className="card-company">{role.company}</span>
              </h3>
              <p className="card-text">{role.summary}</p>
              <ul className="card-bullets">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="pill-list" aria-label="Technologies used">
                {role.tags.map((tag) => (
                  <li key={tag} className="pill">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
