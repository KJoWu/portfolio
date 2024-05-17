"use client";
import React from "react";
import ProjectSection from "./projectSection";
import FeatureSection from "./featureSection";

export default function Playground() {
  return (
    <div className="relative">
      <FeatureSection />

      <div className="relative bg-[white] pt-[3rem] pb-[3rem]">
        <ProjectSection />
      </div>
    </div>
  );
}
