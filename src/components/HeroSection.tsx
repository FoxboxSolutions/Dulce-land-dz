"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/public/placeholder.svg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white p-4 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up">
          Welcome to Dulce Land
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Where Every Bite is a Delight – Handcrafted with Love and Passion.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/menu">View Our Menu</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="px-8 py-3 text-lg">
            <Link to="/order">Order Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;