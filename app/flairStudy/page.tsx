"use client";

import Sidebar from '../_components/sidebar';
import FlairCaseStudyData from "./flairCaseStudyData";

export default function FlairCaseStudy() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <FlairCaseStudyData />
      </main>
    </div>
  );
}