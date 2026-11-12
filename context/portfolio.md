# Portfolio — Context

- **What it is:** A personal portfolio that sits beside the CV of Haleeludheen N.
- **Who it's for:** Anyone reading the CV — hiring, clients, collaborators.
- **Key differentiator:** Real full-stack work, with the value of each skill and project stated in plain language.
- **Current stage:** CV and two projects are on the page. GitHub username is still missing. Not committed or deployed.
- **Current goals:** Keep the page accurate. Add GitHub when the username arrives. Deploy on Vercel when asked.

## Positioning

Haleeludheen N, software engineer and full-stack developer in Kochi, 4 years experience. Lead with skills (including AI integration), Global Infonet experience, then two builds: AI chat on CMS documents (work), and a personal B2B marketplace (solo, no client name or URL). No vendor product names for the search index unless he adds them.

## 2026-11-08 — Privacy and AI positioning

- Remove client product name (African Mart), live URL, and any client-identifying marketplace branding.
- Describe AI work as CMS document chat: contract expiry, clauses, full indexing, retrieval, LLM — emphasize AI integration and agent-style Q&A, not Azure AI Search by name.
- B2B marketplace is a separate personal project, solo end-to-end, live — generic title only.
- Experience line uses 4 years.

## 2026-11-08 — CV and projects added

- Name, phone, email, LinkedIn, location, education, and languages came from the CV.
- Roles at Global Infonet. GitHub username still missing.
- Font: Source Sans 3.

## 2026-11-07 — Decisions

- Stack is Next.js (App Router), React, and TypeScript, with custom CSS. GitHub → Vercel is the deploy path.
- No invented name, job history, or projects. Identity fields live in `content/site.ts` and stay blank until the CV is provided.
- The macOS username is `haleel`. That is not confirmed as the public display name.
- The work section renders only when `projects` has entries.
- Do not commit or push unless asked. The user will connect GitHub and deploy on Vercel.

## Still needed from the user

- GitHub username (`github.com/` was blank)
- The Azure AI service name he could not remember, if he wants it named on the page
- GitHub username
- Domain for this portfolio, if any
