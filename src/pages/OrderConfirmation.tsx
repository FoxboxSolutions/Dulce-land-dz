"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const OrderConfirmation = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation and get i18n object
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg text-center animate-fade-in-up">
          <CheckCircle className="h-24 w-24 text-primary mx-auto mb-6" />
          <h1 className={cn(
            "text-4xl font-extrabold text-primary mb-4",
            isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
          )}>
            {t('order_confirmed_title')}
          </h1>
          <p className={cn(
            "text-lg text-light-cream mb-6",
            isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
          )}>
            {t('order_confirmed_message_1')}
          </p>
          <p className={cn(
            "text-md text-light-cream mb-8",
            isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
          )}>
            {t('order_confirmed_message_2')}
          </p>
          <p className={cn(
            "text-md font-semibold text-primary mb-8",
            isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
          )}>
            {t('dulce_land_wish')}
          </p>
          <div className="flex flex-col space-y-4">
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/our-boxes">{t('continue_shopping')}</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <Link to="/">{t('return_to_home')}</Link>
            </Button>
          </div>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default OrderConfirmation;