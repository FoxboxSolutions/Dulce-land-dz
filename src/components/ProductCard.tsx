"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { t, i18n } = useTranslation(); // Initialize useTranslation
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <Card className="w-full max-w-sm bg-card text-card-foreground border-2 border-primary shadow-lg hover:shadow-primary/50 transition-all duration-500 ease-custom-ease rounded-lg">
      <CardHeader className="p-0">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className={cn(
          "text-2xl font-bold text-product-title mb-2",
          isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
        )}>
          {name}
        </CardTitle>
        <p className="text-light-cream text-sm font-cormorant-garamond mb-4 line-clamp-3">{description}</p>
        <p className="text-xl font-semibold text-foreground">DA{price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => addToCart({ id, name, price, image })}
          className="w-full bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 ease-custom-ease"
        >
          {t('add_to_cart')}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;