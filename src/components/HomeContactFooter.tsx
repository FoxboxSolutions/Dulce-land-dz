"use client";

import React from 'react';
import { Button } from '@/components/ui/button'; // Keep Button import if used elsewhere, but it's removed for WhatsApp
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const HomeContactFooter = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <footer className="bg-black text-foreground py-16 md:py-24 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <img src="https://i.ibb.co/R4J4mqZG/logo-dulce-website-1.png" alt="Dulce Land DZ Logo" className="h-[60px] mx-auto mb-8 animate-fade-in-up" />
        <h2 className={cn(
          "text-[28px] md:text-[40px] font-extrabold text-primary mb-12 animate-fade-in-up",
          isArabic ? "font-ukij-diwani" : "font-cinzel" // Apply UKIJ-Diwani conditionally
        )}>
          {t('get_in_touch')}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="https://wa.me/YOURPHONENUMBER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-44 transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80" 
            >
              <img 
                src="https://i.ibb.co/pBGmnX0g/whats-app.png" 
                alt="Click to Message us on WhatsApp" 
                className="w-full h-auto object-contain"
              />
            </a>
          </div>
          <div className="space-y-4 text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="flex items-center justify-center gap-3 font-cormorant-garamond text-light-cream">
              <Mail className="h-5 w-5 text-primary" /> {t('email_address')}
            </p>
            <p className="flex items-center justify-center gap-3 font-cormorant-garamond text-light-cream">
              <MapPin className="h-5 w-5 text-primary" /> {t('address')}
            </p>
            <p className="flex items-center justify-center gap-3 font-cormorant-garamond text-light-cream">
              <Phone className="h-5 w-5 text-primary" /> {t('phone_number')}
            </p>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm font-cormorant-garamond text-light-cream">&copy; {new Date().getFullYear()} Dulce Land DZ. {t('all_rights_reserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeContactFooter;