import {
  aboutParagraphs,
  education,
  languages,
  site,
} from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="content-section" aria-labelledby="about-heading">
      <div className="sticky-section-header">
        <h2 id="about-heading">About</h2>
      </div>
      <div className="prose-block">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <dl className="fact-grid">
        <div>
          <dt>Experience</dt>
          <dd>{site.yearsExperience}</dd>
        </div>
        <div>
          <dt>Current Team</dt>
          <dd>{site.employer}</dd>
        </div>
        <div>
          <dt>Education</dt>
          <dd>
            {education.degree} · {education.school} ({education.dates})
          </dd>
        </div>
        <div>
          <dt>Languages</dt>
          <dd>{languages.map((l) => `${l.name} (${l.level})`).join(" · ")}</dd>
        </div>
      </dl>

      <footer className="right-footer">
        <p>
          Built with <strong>Next.js</strong> &amp; <strong>TypeScript</strong>. Reach me directly at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </section>
  );
}
