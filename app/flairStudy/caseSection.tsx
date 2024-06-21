import React, { ReactNode } from 'react';

type CaseSectionProps = {
    children: React.ReactNode;
    bg?: string;
  };
  
  
  export default function CaseSection({ children, bg }: CaseSectionProps) {
    return (
        <div className={bg}>
        <div className="max-w-[65em] pl-20">
          {children}
        </div>
      </div>
    );
  }