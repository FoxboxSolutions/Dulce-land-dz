"use client";

import React from 'react';

const LuxuryExperienceSection = () => {
  return (
    <section
      className="relative py-24 md:py-36 bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/public/placeholder.svg')" }} // Placeholder for chocolate texture with gold reflections
    >
      <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <p className="text-4xl md:text-6xl font-extrabold text-primary leading-tight drop-shadow-lg animate-fade-in-up">
          Each bite, a story of perfection.
        </p>
      </div>
    </section>
  );
};

export default LuxuryExperienceSection;