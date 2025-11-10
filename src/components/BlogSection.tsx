"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Button } from '@/components/ui/button';
import BlogPostCard from './BlogPostCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const blogPosts = [
  {
    id: 'how-to-choose-perfect-box',
    image: 'https://i.ibb.co/WNBKn52V/Generated-Image-September-10-2025-12-34-PM.webp',
    titleKey: 'blog_post_how_to_choose_perfect_box_title',
    summaryKey: 'blog_post_how_to_choose_perfect_box_summary',
  },
  {
    id: 'the-secrets-of-luxury-chocolate',
    image: 'https://i.ibb.co/pvRHWmDg/the-secret-of-chocolat-luxury.webp',
    titleKey: 'blog_post_the_secrets_of_luxury_chocolate_title',
    summaryKey: 'blog_post_the_secrets_of_luxury_chocolate_summary',
  },
  {
    id: 'our-new-seasonal-creations',
    image: 'https://i.ibb.co/nqxkS4B8/seasonal-creations.jpg',
    titleKey: 'blog_post_our_new_seasonal_creations_title',
    summaryKey: 'blog_post_our_new_seasonal_creations_summary',
  },
  {
    id: 'the-art-of-pairing-sweets-with-drinks',
    image: 'https://i.ibb.co/wN1fdZJh/The-art-of-pairing-sweets-with-drinks.webp',
    titleKey: 'blog_post_the_art_of_pairing_sweets_with_drinks_title',
    summaryKey: 'blog_post_the_art_of_pairing_sweets_with_drinks_summary',
  },
];

const BlogSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();

  // Extract the current locale from the URL path
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const currentLocale = pathSegments[0] || i18n.language;

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  // Display only the first 3 blog posts
  const displayedBlogPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "text-[28px] md:text-[40px] font-extrabold text-primary mb-4",
            isArabic ? "font-dg-rawnq" : "font-cinzel"
          )}
        >
          {t('blog_section_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={cn(
            "text-lg md:text-xl italic text-light-cream mb-12",
            isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
          )}
        >
          {t('blog_section_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedBlogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            >
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: displayedBlogPosts.length * 0.15 + 0.2 }}
        >
          <Button asChild size="lg" className="px-10 py-4 text-xl bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all duration-500 ease-custom-ease">
            <Link to={getLocalizedPath('/blog')}>{t('view_all_articles')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;