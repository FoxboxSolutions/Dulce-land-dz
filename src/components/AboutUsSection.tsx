"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'; // Import motion
import { useTranslation } from 'react-i18next'; // Import useTranslation

interface AboutUsSectionProps {
  className?: string;
}

const AboutUsSection = ({ className }: AboutUsSectionProps) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <section className={cn("pt-8 pb-16 md:pt-12 md:pb-24 bg-background text-foreground", className)}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[28px] md:text-[40px] font-cinzel font-extrabold text-primary mb-8"
          >
            {t('the_art_of_luxury_sweets')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl font-cormorant-garamond text-light-cream leading-relaxed"
          >
            {t('about_us_paragraph')}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="https://i.ibb.co/mCRMw71n/16-pcs-pink-Box.webp"
            alt="Luxury Sweets"
            className="rounded-lg shadow-xl w-full max-w-md object-cover h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;