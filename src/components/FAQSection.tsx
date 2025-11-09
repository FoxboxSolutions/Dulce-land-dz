"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const faqItems = [
  {
    id: 'faq-1',
    questionKey: 'faq_q1',
    answerKey: 'faq_a1',
  },
  {
    id: 'faq-2',
    questionKey: 'faq_q2',
    answerKey: 'faq_a2',
  },
  {
    id: 'faq-3',
    questionKey: 'faq_q3',
    answerKey: 'faq_a3',
  },
  {
    id: 'faq-4',
    questionKey: 'faq_q4',
    answerKey: 'faq_a4',
  },
  {
    id: 'faq-5',
    questionKey: 'faq_q5',
    answerKey: 'faq_a5',
  },
  {
    id: 'faq-6',
    questionKey: 'faq_q6',
    answerKey: 'faq_a6',
  },
  {
    id: 'faq-7',
    questionKey: 'faq_q7',
    answerKey: 'faq_a7',
  },
];

const FAQSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-[28px] md:text-[40px] font-extrabold text-primary mb-12",
            isArabic ? "font-ukij-diwani" : "font-cinzel" // Apply UKIJ-Diwani conditionally
          )}
        >
          {t('frequently_asked_questions_title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <Card
                key={item.id}
                className="mb-4 bg-card border-2 border-primary/30 shadow-lg hover:shadow-primary/50 transition-shadow duration-300 ease-custom-ease"
              >
                <AccordionItem value={item.id} className="border-b-0">
                  <AccordionTrigger className={cn(
                    "text-lg md:text-xl font-semibold text-foreground hover:no-underline px-6 py-4 text-left",
                    isArabic && "font-ukij-diwani" // Apply UKIJ-Diwani conditionally
                  )}>
                    {t(item.questionKey)}
                  </AccordionTrigger>
                  <AccordionContent className="text-light-cream text-base font-cormorant-garamond px-6 pb-4 text-left">
                    {t(item.answerKey)}
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;