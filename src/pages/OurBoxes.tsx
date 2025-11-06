"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';

const products = [
  {
    id: '1',
    name: 'Classic Sweet Box',
    description: 'A delightful assortment of our most popular sweets, perfect for any occasion. Includes chocolates, cookies, and candies.',
    price: 25.00,
    image: 'https://i.ibb.co/20r3y5g6/4761133983.jpg', // Updated image source
  },
  {
    id: '2',
    name: 'Gourmet Chocolate Box',
    description: 'Indulge in our premium selection of handcrafted chocolates, made with the finest cocoa beans and unique fillings.',
    price: 40.00,
    image: 'https://i.ibb.co/MyrZMDj1/gourmet-chocolate-box.jpg', // Updated image source
  },
  {
    id: '3',
    name: 'Assorted Cookie Box',
    description: 'A variety of freshly baked cookies, from classic chocolate chip to delicate shortbread, something for everyone.',
    price: 20.00,
    image: 'https://i.ibb.co/DHqkZ6vC/Assorted-cookie-box.webp', // Updated image source
  },
  {
    id: '4',
    name: 'Premium Sweet Box',
    description: 'An exquisite collection of our finest and most luxurious sweets, perfect for special gifts and grand celebrations.',
    price: 30.00,
    image: 'https://i.ibb.co/RkCYSvFw/premium-sweet-box.webp', // Updated image source
  },
  {
    id: '5',
    name: 'Kids Fun Box',
    description: 'A colorful box filled with fun and tasty treats that kids will love, including lollipops, gummies, and mini cupcakes.',
    price: 18.00,
    image: '/public/placeholder.svg',
  },
  {
    id: '6',
    name: 'Customizable Sweet Box',
    description: 'Create your own perfect sweet box by choosing from our wide range of individual treats. The ultimate personalized gift!',
    price: 35.00,
    image: '/public/placeholder.svg',
  },
];

const OurBoxes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[120px] container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-center text-primary mb-12 animate-fade-in-up">Our Sweet Boxes</h1>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Discover our exquisite collection of handcrafted sweet boxes, perfect for gifting or treating yourself. Each box is filled with love and the finest ingredients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default OurBoxes;