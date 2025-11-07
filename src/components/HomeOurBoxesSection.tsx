"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion

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
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[28px] md:text-[40px] font-cinzel font-extrabold text-primary mb-12"
        >
          Our Signature Boxes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center text-lg font-cormorant-garamond text-light-cream mb-12 max-w-2xl mx-auto"
        >
          Discover our exquisite collection of handcrafted sweet boxes, perfect for gifting or treating yourself. Each box is filled with love and the finest ingredients.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productsPreview.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: productsPreview.length * 0.15 + 0.2 }} // Delay after cards
        >
          <Button asChild size="lg" className="px-10 py-4 text-xl bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all duration-500 ease-custom-ease">
            <Link to="/our-boxes">View All Boxes</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeOurBoxesSection;