import Intro from "./_home/intro";
import Projects from "./_home/projects";
import Skills from "./_home/skills";
import Awards from "./_home/awards";
import ResearchProjects from "./_home/researchProjects";

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />
      <Awards />
      <ResearchProjects />
    </main>
  );
}
