import Intro from "./_home/intro";
import Work from "./_home/work";
import Drawing from "./_home/drawing";

import { designTools, technicalTools, technicalSkills } from "./lib/workData";

export default function Home() {
  return (
    <main className="max-w-[50em] mx-auto">
      <Intro />
      <Work />
    </main>
  );
}
