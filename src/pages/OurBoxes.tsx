"use client";

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const OurBoxes = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  const products = [
    {
      id: '1',
      name: t('classic_sweet_box_name'),
      description: t('classic_sweet_box_description'),
      price: 25.00,
      image: 'https://i.ibb.co/20r3y5g6/4761133983.jpg',
    },
    {
      id: '2',
      name: t('gourmet_chocolate_box_name'),
      description: t('gourmet_chocolate_box_description'),
      price: 40.00,
      image: 'https://i.ibb.co/MyrZMDj1/gourmet-chocolate-box.jpg',
    },
    {
      id: '3',
      name: t('assorted_cookie_box_name'),
      description: t('assorted_cookie_box_description'),
      price: 20.00,
      image: 'https://i.ibb.co/DHqkZ6vC/Assorted-cookie-box.webp',
    },
    {
      id: '4',
      name: t('premium_sweet_box_name'),
      description: t('premium_sweet_box_description'),
      price: 30.00,
      image: 'https://i.ibb.co/RkCYSvFw/premium-sweet-box.webp',
    },
    {
      id: '5',
      name: t('kids_fun_box_name'),
      description: t('kids_fun_box_description'),
      price: 18.00,
      image: '/public/placeholder.svg',
    },
    {
      id: '6',
      name: t('customizable_sweet_box_name'),
      description: t('customizable_sweet_box_description'),
      price: 35.00,
      image: '/public/placeholder.svg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[120px] container mx-auto px-4 py-8">
        <h1 className="text-5xl font-cinzel font-extrabold text-center text-primary mb-12 animate-fade-in-up">{t('our_sweet_boxes_title')}</h1>
        <p className="text-center text-lg font-cormorant-garamond text-light-cream mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {t('our_sweet_boxes_description')}
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