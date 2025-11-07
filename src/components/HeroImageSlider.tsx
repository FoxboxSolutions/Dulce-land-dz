"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeroImageSliderProps {
  images: string[];
  interval?: number; // Interval in milliseconds
}

const HeroImageSlider = ({ images, interval = 5000 }: HeroImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden z-10">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Hero background ${index + 1}`}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
};

export default HeroImageSlider;