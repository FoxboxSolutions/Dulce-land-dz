"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react'; // Removed MessageSquare as it's replaced by an image
import { useTranslation } from 'react-i18next'; // Import useTranslation

const HomeContactFooter = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <footer className="bg-black text-foreground py-16 md:py-24 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <img src="https://i.ibb.co/R4J4mqZG/logo-dulce-website-1.png" alt="Dulce Land DZ Logo" className="h-[60px] mx-auto mb-8 animate-fade-in-up" />
        <h2 className="text-[28px] md:text-[40px] font-cinzel font-extrabold text-primary mb-12 animate-fade-in-up">
          {t('get_in_touch')}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg hover:shadow-green-500/50 transition-all duration-500 ease-custom-ease">
              <a href="https://wa.me/YOURPHONENUMBER" target="_blank" rel="noopener noreferrer">
                <img src="https://wallpapers.com/images/hd/whats-app-now-button-i0ipy3qp5942tpyu-2.jpg" alt="WhatsApp Icon" className="h-8 w-8 object-contain" />
                {t('whatsapp_us')}
              </a>
            </Button>
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