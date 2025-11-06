"use client";

import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 animate-fade-in-up">
            The Art of Luxury Sweets
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            At Dulcé Land, we believe in crafting more than just sweets; we create edible masterpieces. Each box is a testament to our passion for exquisite flavors, premium ingredients, and meticulous artistry. From the delicate crunch of our handcrafted chocolates to the melt-in-your-mouth perfection of our pastries, every bite is designed to transport you to a world of pure indulgence. Discover the difference that dedication and a touch of luxury can make.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <img
            src="/public/placeholder.svg" // Placeholder for an elegant cake or open box image
            alt="Luxury Sweets"
            className="rounded-lg shadow-xl w-full max-w-md object-cover h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;