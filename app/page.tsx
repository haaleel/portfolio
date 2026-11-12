import { AboutSection } from "@/components/AboutSection";
import { AiSection } from "@/components/AiSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Sidebar } from "@/components/Sidebar";

export default function HomePage() {
  return (
    <div className="split-layout">
      <Sidebar />
      <main id="content" className="right-pane">
        <AiSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
      </main>
    </div>
  );
}
