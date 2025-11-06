"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/public/placeholder.svg')" }} // Placeholder for a dark image with gold reflections
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="relative z-10 text-white p-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up text-primary">
          Dulcé Land DZ
        </h1>
        <p className="text-2xl md:text-3xl mb-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Un luxe à savourer
        </p>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="px-10 py-4 text-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50">
            <Link to="/our-boxes">Explore Our Boxes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;