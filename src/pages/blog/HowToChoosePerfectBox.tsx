"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const HowToChoosePerfectBox = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();

  // Extract the current locale from the URL path
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const currentLocale = pathSegments[0] || i18n.language;

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg animate-fade-in-up">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-4xl font-extrabold text-primary mb-6 text-center",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('blog_post_how_to_choose_perfect_box_title')}
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            src="https://i.ibb.co/WNBKn52V/Generated-Image-September-10-2025-12-34-PM.webp"
            alt={t('blog_post_how_to_choose_perfect_box_title')}
            className="w-full h-80 object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-8",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_intro')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('how_to_choose_perfect_box_section_1_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-4",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_section_1_content_1')}
            <br />
            {t('how_to_choose_perfect_box_section_1_content_2')}
            <br />
            {t('how_to_choose_perfect_box_section_1_content_3')}
            <br />
            {t('how_to_choose_perfect_box_section_1_content_4')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('how_to_choose_perfect_box_section_2_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-4",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_section_2_content_1')}
            <br />
            {t('how_to_choose_perfect_box_section_2_content_2')}
            <br />
            {t('how_to_choose_perfect_box_section_2_content_3')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('how_to_choose_perfect_box_section_3_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-4",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_section_3_content_1')}
            <br />
            {t('how_to_choose_perfect_box_section_3_content_2')}
            <br />
            {t('how_to_choose_perfect_box_section_3_content_3')}
            <br />
            {t('how_to_choose_perfect_box_section_3_content_4')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('how_to_choose_perfect_box_section_4_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-4",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_section_4_content_1')}
            <br />
            {t('how_to_choose_perfect_box_section_4_content_2')}
            <br />
            {t('how_to_choose_perfect_box_section_4_content_3')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('how_to_choose_perfect_box_section_5_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-4",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_section_5_content_1')}
            <br />
            {t('how_to_choose_perfect_box_section_5_content_2')}
            <br />
            {t('how_to_choose_perfect_box_section_5_content_3')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic ? "font-dg-rawnq" : "font-cinzel"
            )}
          >
            {t('how_to_choose_perfect_box_conclusion_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-lg text-light-cream leading-relaxed mb-4",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_conclusion_content_1')}
            <br />
            {t('how_to_choose_perfect_box_conclusion_content_2')}
            <br />
            {t('how_to_choose_perfect_box_conclusion_content_3')}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-md italic text-primary mt-12 text-right",
              isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
            )}
          >
            {t('how_to_choose_perfect_box_author')}
          </motion.p>

          <Button asChild variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-8">
            <Link to={getLocalizedPath('/blog')}>{t('back_to_blog')}</Link>
          </Button>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default HowToChoosePerfectBox;