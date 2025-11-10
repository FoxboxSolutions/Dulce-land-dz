"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const ContactUs = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation and get i18n object
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('message_sent_success_toast'));
    // In a real application, you would send this data to a backend
    console.log("Contact form submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h1 className={cn(
            "text-4xl font-extrabold text-center text-primary mb-6",
            isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
          )}>
            {t('contact_us_title')}
          </h1>
          <p className={cn(
            "text-center text-light-cream mb-8",
            isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
          )}>
            {t('contact_us_description')}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className={cn(
                "text-foreground",
                isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
              )}>{t('name')}</Label>
              <Input id="name" type="text" placeholder={t('name')} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div>
              <Label htmlFor="email" className={cn(
                "text-foreground",
                isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
              )}>{t('email')}</Label>
              <Input id="email" type="email" placeholder={t('email')} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div>
              <Label htmlFor="subject" className={cn(
                "text-foreground",
                isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
              )}>{t('subject')}</Label>
              <Input id="subject" type="text" placeholder={t('subject')} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div>
              <Label htmlFor="message" className={cn(
                "text-foreground",
                isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
              )}>{t('message')}</Label>
              <Textarea id="message" placeholder={t('message')} rows={5} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {t('send_message')}
            </Button>
          </form>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default ContactUs;