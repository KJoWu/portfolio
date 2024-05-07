import Intro from "./_home/intro";
import Projects from "./_home/projects";
import Skills from "./_home/skills";
import Awards from "./_home/awards";
import ResearchProjects from "./_home/researchProjects";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <Skills />
      <Projects />
      <Awards />
      <ResearchProjects />
    </main>
  );
}
