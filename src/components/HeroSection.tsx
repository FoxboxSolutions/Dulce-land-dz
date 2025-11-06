"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroImageSlider from './HeroImageSlider';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  'https://littleblackpastrybox.com/cdn/shop/files/Little-Black-Pastry-Box-Authentic-French-Patisserie-Pastry-Desserts-Giftbox-Giftset-cake-Boite-de-gateaux-01_e13a8ce0-ba57-4390-a3e4-17dcadec2282.jpg?v=1683827951',
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <HeroImageSlider images={heroImages} />

      {/* Gold Gradient Overlay with Soft Light Blend Mode */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #d29a33, #e7bf5d)',
          mixBlendMode: 'soft-light',
          opacity: 0.7, // Adjust opacity as needed for desired glow intensity
        }}
      ></div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div> 

      <div className="relative z-10 text-white p-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up text-white">
          Welcome to Dulcé Land
        </h1>
        <p className="text-2xl md:text-3xl mb-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Un luxe à savourer
        </p>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="px-10 py-4 text-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/50 animate-pulse-slow">
            <Link to="/our-boxes">Discover Our Creations</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <ChevronDown className="h-10 w-10 text-primary" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  );
};

export default HeroSection;