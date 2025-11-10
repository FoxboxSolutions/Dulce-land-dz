"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import BlogPostCard from '@/components/BlogPostCard'; // Import BlogPostCard
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames
import { useLocation } from 'react-router-dom'; // Import useLocation

const allBlogPosts = [
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
  {
    id: 'sweet-traditions-around-the-world',
    image: 'https://content.instructables.com/FFB/0JUT/LR6D34IP/FFB0JUTLR6D34IP.jpg?auto=webp',
    titleKey: 'blog_post_sweet_traditions_around_the_world_title',
    summaryKey: 'blog_post_sweet_traditions_around_the_world_summary',
  },
  {
    id: 'behind-the-scenes-a-day-at-dulce-land',
    image: 'https://platform.sf.eater.com/wp-content/uploads/sites/28/chorus/uploads/chorus_asset/file/1094592/Screen_20shot_202012-08-30_20at_201_02_10_20PM_png.0.jpg?quality=90&strip=all',
    titleKey: 'blog_post_behind_the_scenes_title',
    summaryKey: 'blog_post_behind_the_scenes_summary',
  },
];

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();

  // Extract the current locale from the URL path
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const currentLocale = pathSegments[0] || i18n.language;

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 text-center">
        <h1 className={cn(
          "text-5xl font-extrabold text-primary mb-12 animate-fade-in-up",
          isArabic ? "font-dg-rawnq" : "font-cinzel"
        )}>
          {t('all_blog_articles_title')}
        </h1>
        <p className={cn(
          "text-lg text-light-cream mb-8 animate-fade-in-up",
          isArabic ? "font-luxury-font" : "font-cormorant-garamond" // Apply Luxury Font conditionally
        )} style={{ animationDelay: '0.3s' }}>
          {t('all_blog_articles_description')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map((post, index) => (
            <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <BlogPostCard {...post} />
            </div>
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default BlogPage;