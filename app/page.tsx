import Intro from "./_home/intro";
import Work from "./_home/work";
import Skills from "./_home/skills";
import Awards from "./_home/awards";
import ResearchProjects from "./_home/researchProjects";

export default function Home() {
  return (
    <main>
      <Intro />
      {/* <Skills /> */}
      <Work />
      <Awards />
      <ResearchProjects />
    </main>
  );
}
