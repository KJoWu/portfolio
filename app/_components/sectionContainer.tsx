import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: SectionContainerProps) {
  return (
    <div className="container px-5 mx-auto max-w-screen-lg">{children}</div>
  )
}