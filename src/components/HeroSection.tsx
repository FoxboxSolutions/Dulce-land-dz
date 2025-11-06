"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import HeroImageSlider from './HeroImageSlider';
import { ChevronDown } from 'lucide-react';


const heroImages = [
  'https://littleblackpastrybox.com/cdn/shop/files/Little-Black-Pastry-Box-Authentic-French-Patisserie-Pastry-Desserts-Giftbox-Giftset-cake-Boite-de-gateaux-01_e13a8ce0-ba57-4390-a3e4-17dcadec2282.jpg?v=1683827951',
  'https://www.restaurant-figuier-saint-esprit.fr/public/img/big/dessertmariageJPG_6181635c6283a.JPG',
  'https://www.yeahweddings.com/wp-content/uploads/2024/08/Gourmet-Chocolate-Mini-Cakes-1024x1024.jpg',
  'https://img.freepik.com/premium-photo/tempting-chocolate-treats-showcasing-variety-delicious-desserts_894067-45462.jpg',
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-start justify-center text-center overflow-hidden pt-[92px]"> {/* Added pt-[92px] */}
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

      <div className="relative z-10 text-white px-4 max-w-4xl mx-auto"> {/* Changed p-4 to px-4 */}
        <img 
          src="https://i.ibb.co/3yT8XBS8/logo-rond.png" 
          alt="Dulcé Land Logo" 
          className="h-32 md:h-48 mx-auto mb-8 animate-fade-in-up drop-shadow-lg" 
          style={{ animationDelay: '0.1s' }}
        />
        <h1 className="leading-tight mb-24 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <span className="font-great-vibes text-white text-5xl md:text-7xl block">Welcome to</span>
          <span className="font-cinzel text-gradient-gold text-[40px] md:text-70px block">Dulcé Land</span>
        </h1>
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <Button asChild size="lg" className="px-10 py-4 text-xl bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
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