import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="container mx-auto max-w-screen-lg  sm:px-[3em]">{children}</div>
  )
}