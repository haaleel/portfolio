import { projects } from "@/content/site";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="content-section"
      aria-labelledby="projects-heading"
    >
      <div className="sticky-section-header">
        <h2 id="projects-heading">Selected Projects</h2>
      </div>
      <ul className="card-group">
        {projects.map((project, index) => (
          <li key={project.name} className="glass-card">
            <div className="project-badge" aria-hidden="true">
              <span className="project-badge-kicker">
                {index === 0 ? "AI SYSTEM" : "FULL STACK"}
              </span>
              <span className="project-badge-sub">
                {index === 0 ? "RAG · LLM" : "MONOREPO"}
              </span>
            </div>
            <div className="card-body">
              <p className="project-label">{project.label}</p>
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text">{project.summary}</p>
              <ul className="card-bullets">
                {project.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="pill-list" aria-label="Technologies used">
                {project.tags.map((tag) => (
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
