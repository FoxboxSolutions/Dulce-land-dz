"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import { Leaf, Gift, Sparkles, Truck, MessageCircle, Heart } from 'lucide-react';

interface ReasonCardProps {
  id: string;
  frontTitleKey: string;
  backTextKey: string;
  icon: React.ElementType; // Lucide icon component
  delay: number;
  backgroundImage: string; // New prop for background image
  isArabic: boolean; // Pass isArabic prop
}

const ReasonCard = ({ id, frontTitleKey, backTextKey, icon: Icon, delay, backgroundImage, isArabic }: ReasonCardProps) => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsMobile();

  const handleFlip = () => {
    if (isMobile) {
      setIsFlipped(prev => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="perspective-1000 flex justify-center"
    >
      <div
        className={cn(
          "relative w-full max-w-sm h-64 rounded-lg shadow-lg border border-primary/30 transition-all duration-700 ease-custom-ease",
          "transform-style-preserve-3d",
          "cursor-pointer",
          { 'rotate-y-180': isFlipped }
        )}
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Front of the card with background image and overlay */}
        <div
          className="absolute inset-0 backface-hidden bg-card p-6 flex flex-col items-center justify-center rounded-lg transition-all duration-200 ease-custom-ease hover:shadow-primary/50 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black rounded-lg opacity-45"></div>
          {/* Content of the front face, conditionally hidden */}
          <div className={cn("relative z-10 flex flex-col items-center justify-center text-center transition-opacity duration-300", { "opacity-0": isFlipped })}>
            <Icon className="h-10 w-10 text-primary mb-4" />
            <h3 className={cn(
              "text-xl font-semibold text-white mb-2",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}>
              {t(frontTitleKey)}
            </h3>
          </div>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 backface-hidden bg-black p-6 flex items-center justify-center rounded-lg rotate-y-180">
          <p className="text-light-cream text-center text-sm font-cormorant-garamond">{t(backTextKey)}</p>
        </div>
      </div>
    </motion.div>
  );
};

const reasons = [
  {
    id: '1',
    frontTitleKey: 'reason_0_front_title',
    backTextKey: 'reason_0_back_text',
    icon: Leaf,
    backgroundImage: 'https://i.ibb.co/ds9NSr0q/natural-ingrediente.jpg',
  },
  {
    id: '2',
    frontTitleKey: 'reason_1_front_title',
    backTextKey: 'reason_1_back_text',
    icon: Gift,
    backgroundImage: 'https://i.ibb.co/svFSgLKV/luxury-packaging.webp',
  },
  {
    id: '3',
    frontTitleKey: 'reason_2_front_title',
    backTextKey: 'reason_2_back_text',
    icon: Sparkles,
    backgroundImage: 'https://i.ibb.co/PVQbYyc/artisanal-excellence.jpg',
  },
  {
    id: '4',
    frontTitleKey: 'reason_3_front_title',
    backTextKey: 'reason_3_back_text',
    icon: Truck,
    backgroundImage: 'https://i.ibb.co/SG720hK/fast-delivery.jpg',
  },
  {
    id: '5',
    frontTitleKey: 'reason_4_front_title',
    backTextKey: 'reason_4_back_text',
    icon: MessageCircle,
    backgroundImage: 'https://i.ibb.co/Kxwd1CM7/customer-service.jpg',
  },
  {
    id: '6',
    frontTitleKey: 'reason_5_front_title',
    backTextKey: 'reason_5_back_text',
    icon: Heart,
    backgroundImage: 'https://i.ibb.co/ccBSLTWw/trusted-by-sweet-lovers.webp',
  },
];

const WhyChooseUsSection = () => {
  const { t, i18n } = useTranslation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-16 md:py-24 bg-background text-foreground">
      {/* Golden Gradient Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-12"></div>

      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-[28px] md:text-[40px] font-extrabold text-primary mb-4",
            isArabic ? "font-ink-brush-arabic" : "font-cinzel" // Apply Ink Brush Arabic conditionally
          )}
        >
          {t('why_choose_dulce_land_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl font-cormorant-garamond italic text-light-cream mb-12"
        >
          {t('why_choose_dulce_land_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={reason.id}
              id={reason.id}
              frontTitleKey={reason.frontTitleKey}
              backTextKey={reason.backTextKey}
              icon={reason.icon}
              delay={index * 0.15}
              backgroundImage={reason.backgroundImage}
              isArabic={isArabic} // Pass isArabic prop
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;