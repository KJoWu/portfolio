"use client";

import { useState, useEffect } from 'react';
import Sidebar from '../_components/sidebar';
import FlairCaseStudyData from "./flairCaseStudyData";

export default function FlairCaseStudy() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Give enough time for videos to start loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading case study...</p>
          </div>
        </div>
      )}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <FlairCaseStudyData />
        </main>
      </div>
    </>
  );
}
