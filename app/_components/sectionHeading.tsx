import React from "react";
import SectionContainer from "./sectionContainer";

type SectionHeadingProps = {
  children: React.ReactNode;
};



export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <SectionContainer>
      <div className="text-3xl text-left font-medium capitalize mb-8 ">
        {children}
      </div>
    </SectionContainer>
  );
}