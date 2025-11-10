"use client";

import React from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const LuxuryExperienceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger when 20% of the component is visible
    triggerOnce: true, // Only animate once
  });
  const { t, i18n } = useTranslation(); // Initialize useTranslation and get i18n object
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-36 bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('https://i.ibb.co/nN6cKjcz/steptodown-com610188.jpg')", backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay, changed to 50% */}
      <div className={cn(
        "relative z-10 container mx-auto px-4",
        inView ? "animate-fade-in-up" : "opacity-0" // Apply animation or keep hidden
      )}>
        <p className={cn(
          "text-4xl md:text-6xl font-extrabold text-primary leading-tight drop-shadow-lg",
          isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
        )}>
          {t('every_bite_tells_a_story')}
        </p>
      </div>
    </section>
  );
};

export default LuxuryExperienceSection;