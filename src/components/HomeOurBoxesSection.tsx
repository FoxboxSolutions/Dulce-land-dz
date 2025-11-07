"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const productsPreview = [
  {
    id: '1',
    name: 'Classic Sweet Box',
    description: 'A delightful assortment of our most popular sweets, perfect for any occasion.',
    price: 25.00,
    image: 'https://i.ibb.co/20r3y5g6/4761133983.jpg', // Updated image source
  },
  {
    id: '2',
    name: 'Gourmet Chocolate Box',
    description: 'Indulge in our premium selection of handcrafted chocolates, made with the finest cocoa.',
    price: 40.00,
    image: 'https://i.ibb.co/MyrZMDj1/gourmet-chocolate-box.jpg', // Updated image source
  },
  {
    id: '3',
    name: 'Assorted Cookie Box',
    description: 'A variety of freshly baked cookies, from classic chocolate chip to delicate shortbread.',
    price: 20.00,
    image: 'https://i.ibb.co/DHqkZ6vC/Assorted-cookie-box.webp', // Updated image source
  },
  {
    id: '4',
    name: 'Premium Sweet Box',
    description: 'An exquisite collection of our finest and most luxurious sweets, perfect for special gifts.',
    price: 30.00,
    image: 'https://i.ibb.co/RkCYSvFw/premium-sweet-box.webp', // Updated image source
  },
];

const HomeOurBoxesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[28px] md:text-[40px] font-cinzel font-extrabold text-primary mb-12 animate-fade-in-up">
          Our Signature Boxes
        </h2>
        <p className="text-center text-lg font-cormorant-garamond text-light-cream mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Discover our exquisite collection of handcrafted sweet boxes, perfect for gifting or treating yourself. Each box is filled with love and the finest ingredients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productsPreview.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.15}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="px-10 py-4 text-xl bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all duration-500 ease-custom-ease animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/our-boxes">View All Boxes</Link>
        </Button>
      </div>
    </section>
  );
};

export default HomeOurBoxesSection;