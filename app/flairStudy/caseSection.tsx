import React, { ReactNode } from 'react';

type CaseSectionProps = {
    children: React.ReactNode;
    bg?: string;
  };
  
  
  export default function CaseSection({ children, bg }: CaseSectionProps) {
    return (
        <div className={bg}>
        <div className="md:max-w-[65em] md:pl-20">
          {children}
        </div>
      </div>
    );
  }