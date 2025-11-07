"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const images = [
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
  '/public/placeholder.svg',
];

const Gallery = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8">
        <h1 className="text-5xl font-cinzel font-extrabold text-center text-primary mb-12 animate-fade-in-up">{t('our_sweet_creations_title')}</h1>
        <p className="text-center text-lg font-cormorant-garamond text-light-cream mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {t('our_sweet_creations_description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500 ease-custom-ease"
              />
            </div>
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Gallery;