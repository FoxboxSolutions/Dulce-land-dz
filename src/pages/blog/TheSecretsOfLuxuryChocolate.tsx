"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const TheSecretsOfLuxuryChocolate = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

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
              isArabic ? "font-ink-brush-arabic" : "font-cinzel" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('blog_post_the_secrets_of_luxury_chocolate_title')}
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            src="https://i.ibb.co/pvRHWmDg/the-secret-of-chocolat-luxury.webp"
            alt={t('blog_post_the_secrets_of_luxury_chocolate_title')}
            className="w-full h-80 object-cover rounded-lg mb-8"
            loading="lazy"
          />

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-8"
          >
            {t('the_secrets_of_luxury_chocolate_intro')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('the_secrets_of_luxury_chocolate_section_1_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('the_secrets_of_luxury_chocolate_section_1_content')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('the_secrets_of_luxury_chocolate_section_2_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('the_secrets_of_luxury_chocolate_section_2_content')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('the_secrets_of_luxury_chocolate_section_3_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('the_secrets_of_luxury_chocolate_section_3_content')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('the_secrets_of_luxury_chocolate_section_4_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('the_secrets_of_luxury_chocolate_section_4_content')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('the_secrets_of_luxury_chocolate_section_5_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('the_secrets_of_luxury_chocolate_section_5_content')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ink-brush-arabic" // Apply Ink Brush Arabic conditionally
            )}
          >
            {t('the_secrets_of_luxury_chocolate_section_6_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('the_secrets_of_luxury_chocolate_section_6_content')}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4 mt-8"
          >
            {t('the_secrets_of_luxury_chocolate_conclusion')}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-md italic font-cormorant-garamond text-primary mt-12 text-right"
          >
            {t('the_secrets_of_luxury_chocolate_author')}
          </motion.p>

          <Button asChild variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-8">
            <Link to="/blog">{t('back_to_blog')}</Link>
          </Button>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default TheSecretsOfLuxuryChocolate;