"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import BlogPostCard from '@/components/BlogPostCard'; // Import BlogPostCard
import { useTranslation } from 'react-i18next';

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
    id: '2',
    image: 'https://i.ibb.co/Q811111/blog-post-2.jpg',
    titleKey: 'blog_post_2_title',
    summaryKey: 'blog_post_2_summary',
  },
  {
    id: '3',
    image: 'https://i.ibb.co/Q811111/blog-post-3.jpg',
    titleKey: 'blog_post_3_title',
    summaryKey: 'blog_post_3_summary',
  },
  {
    id: '4',
    image: 'https://i.ibb.co/Q811111/blog-post-4.jpg', // Placeholder image
    titleKey: 'blog_post_4_title',
    summaryKey: 'blog_post_4_summary',
  },
  {
    id: '5',
    image: 'https://i.ibb.co/Q811111/blog-post-5.jpg', // Placeholder image
    titleKey: 'blog_post_5_title',
    summaryKey: 'blog_post_5_summary',
  },
  {
    id: '6',
    image: 'https://i.ibb.co/Q811111/blog-post-6.jpg', // Placeholder image
    titleKey: 'blog_post_6_title',
    summaryKey: 'blog_post_6_summary',
  },
];

const BlogPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 text-center">
        <h1 className="text-5xl font-cinzel font-extrabold text-primary mb-12 animate-fade-in-up">{t('all_blog_articles_title')}</h1>
        <p className="text-lg font-cormorant-garamond text-light-cream mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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