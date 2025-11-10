"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const testimonials = [
  {
    name: 'Sarah M.',
    titleKey: 'testimonial_sarah_title', // Using translation key
    avatar: 'https://i.ibb.co/bMr5PYPt/steptodown-com936074.jpg',
    reviewKey: 'testimonial_sarah_review', // Using translation key
  },
  {
    name: 'Chef Antoine',
    titleKey: 'testimonial_antoine_title', // Using translation key
    avatar: 'https://i.ibb.co/sdY4J1hy/Chef-Antoine.jpg',
    reviewKey: 'testimonial_antoine_review', // Using translation key
  },
  {
    name: 'Ahmed K.',
    titleKey: 'testimonial_ahmed_title', // Using translation key
    avatar: 'https://i.ibb.co/VYL6MFKP/Ahmed.jpg',
    reviewKey: 'testimonial_ahmed_review', // Using translation key
  },
];

const TestimonialsSection = () => {
  const { t, i18n } = useTranslation(); // Initialize useTranslation and get i18n object
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-[28px] md:text-[40px] font-extrabold text-primary mb-4",
            isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
          )}
        >
          {t('what_our_clients_say')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center gap-1 mb-12"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-primary fill-primary" />
          ))}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
              className="w-full max-w-sm" // Wrapper div for motion
            >
              <Card className="bg-card border-primary/30 shadow-lg hover:shadow-primary/50 transition-shadow duration-500 ease-custom-ease rounded-lg h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="h-20 w-20 mb-4 border-2 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className={cn(
                    "text-lg italic text-light-cream mb-4",
                    isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                  )}>"{t(testimonial.reviewKey)}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className={cn(
                    "text-sm text-primary",
                    isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                  )}>{t(testimonial.titleKey)}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;