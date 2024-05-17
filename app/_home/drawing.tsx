'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Drawing() {
  return (
    <div className="w-[40em] h-[20em]">
      <Spline scene="https://prod.spline.design/u9ZoSUZCO32HLQUk/scene.splinecode" />
    </div>
  );
}
