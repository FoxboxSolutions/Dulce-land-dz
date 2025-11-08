"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const BehindTheScenesADayAtDulceLand = () => {
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
              isArabic ? "font-ukij-diwani" : "font-cinzel" // Apply UKIJ Diwani conditionally
            )}
          >
            {t('blog_post_behind_the_scenes_title')}
          </motion.h1>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            src="https://platform.sf.eater.com/wp-content/uploads/sites/28/chorus/uploads/chorus_asset/file/1094592/Screen_20shot_202012-08-30_20at_201_02_10_20PM_png.0.jpg?quality=90&strip=all"
            alt={t('blog_post_behind_the_scenes_title')}
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
            {t('behind_the_scenes_intro_1')}
            <br />
            {t('behind_the_scenes_intro_2')}
            <br />
            <br />
            {t('behind_the_scenes_intro_3')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ukij-diwani" // Apply UKIJ Diwani conditionally
            )}
          >
            {t('behind_the_scenes_morning_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('behind_the_scenes_morning_content_1')}
            <br />
            {t('behind_the_scenes_morning_content_2')}
            <br />
            <br />
            {t('behind_the_scenes_morning_content_3')}
            <br />
            {t('behind_the_scenes_morning_content_4')}
            <br />
            <br />
            {t('behind_the_scenes_morning_content_5')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ukij-diwani" // Apply UKIJ Diwani conditionally
            )}
          >
            {t('behind_the_scenes_midday_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('behind_the_scenes_midday_content_1')}
            <br />
            {t('behind_the_scenes_midday_content_2')}
            <br />
            {t('behind_the_scenes_midday_content_3')}
            <br />
            <br />
            {t('behind_the_scenes_midday_content_4')}
            <br />
            {t('behind_the_scenes_midday_content_5')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ukij-diwani" // Apply UKIJ Diwani conditionally
            )}
          >
            {t('behind_the_scenes_afternoon_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('behind_the_scenes_afternoon_content_1')}
            <br />
            {t('behind_the_scenes_afternoon_content_2')}
            <br />
            {t('behind_the_scenes_afternoon_content_3')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ukij-diwani" // Apply UKIJ Diwani conditionally
            )}
          >
            {t('behind_the_scenes_evening_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('behind_the_scenes_evening_content_1')}
            <br />
            {t('behind_the_scenes_evening_content_2')}
            <br />
            <br />
            {t('behind_the_scenes_evening_content_3')}
          </motion.p>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className={cn(
              "text-3xl font-bold text-foreground mb-4 mt-8",
              isArabic && "font-ukij-diwani" // Apply UKIJ Diwani conditionally
            )}
          >
            {t('behind_the_scenes_conclusion_title')}
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-4"
          >
            {t('behind_the_scenes_conclusion_content_1')}
            <br />
            {t('behind_the_scenes_conclusion_content_2')}
            <br />
            {t('behind_the_scenes_conclusion_content_3')}
            <br />
            <br />
            {t('behind_the_scenes_conclusion_content_4')}
          </motion.p>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-md italic font-cormorant-garamond text-primary mt-12 text-right"
          >
            {t('behind_the_scenes_author')}
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

export default BehindTheScenesADayAtDulceLand;