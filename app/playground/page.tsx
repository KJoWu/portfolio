"use client";
import React from "react";
import AdditionalProjectSection from "./additionalProjectSection";
import ProjectHighlightSection from "./projectHighlightSection";

export default function Playground() {
  return (
    <div className="relative">
      <ProjectHighlightSection />

      <div className="relative bg-white-400 pt-[5rem] pb-[3rem]">
        <AdditionalProjectSection />
      </div>
    </div>
  );
}
