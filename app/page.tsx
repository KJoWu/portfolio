import Intro from "./_home/intro";
import Work from "./_home/work";
import Drawing from "./_home/drawing";

import { designTools, technicalTools, technicalSkills } from "./lib/workData";

export default function Home() {
  return (
    <main>
      <Intro />
      <Work />
    </main>
  );
}
