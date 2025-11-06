"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface ChocolateDripTransitionProps {
  className?: string;
}

const ChocolateDripTransition = ({ className }: ChocolateDripTransitionProps) => {
  return (
    <div className={cn("absolute bottom-0 left-0 right-0 w-full overflow-hidden z-20", className)}>
      <img
        src="https://i.ibb.co/CpMpfCfM/realistic-chocolate-dripping-isolated-object-transparent-background-ai-generated-free-png.png"
        alt="Melting Chocolate Drip Transition"
        className="w-full h-full object-fill animate-drip-wave"
      />
    </div>
  );
};

export default ChocolateDripTransition;