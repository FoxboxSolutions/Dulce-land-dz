"use client";

import React from 'react';

const MeltingChocolateTransition = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-24 md:h-32 overflow-hidden z-20">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldCaramelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e7bf5d" />
            <stop offset="50%" stopColor="#d29a33" />
            <stop offset="100%" stopColor="#b2741b" />
          </linearGradient>
        </defs>
        {/* This path creates a wavy, dripping effect */}
        <path
          d="M0 0 C 180 60, 360 0, 540 60, 720 0, 900 60, 1080 0, 1260 60, 1440 0 L 1440 100 L 0 100 Z"
          fill="url(#goldCaramelGradient)"
          className="animate-drip-wave"
          style={{ mixBlendMode: 'soft-light' }}
        />
      </svg>
    </div>
  );
};

export default MeltingChocolateTransition;