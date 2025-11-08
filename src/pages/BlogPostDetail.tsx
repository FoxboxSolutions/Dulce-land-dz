"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const BlogPostDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  // In a real application, you would fetch blog post data based on 'id'
  const blogTitle = t('blog_post_detail_title', { id });
  const blogContent = t('blog_post_detail_content');

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8">
        <div className="w-full max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h1 className={cn(
            "text-4xl font-extrabold text-primary mb-6 text-center",
            isArabic ? "font-ink-brush-arabic" : "font-cinzel" // Apply Ink Brush Arabic conditionally
          )}>
            {blogTitle}
          </h1>
          <img
            src="https://i.ibb.co/Q811111/blog-post-1.jpg" // Placeholder image
            alt={blogTitle}
            className="w-full h-80 object-cover rounded-lg mb-8"
            loading="lazy"
          />
          <p className="text-lg font-cormorant-garamond text-light-cream leading-relaxed mb-8">
            {blogContent}
          </p>
          <Button asChild variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Link to="/blog">{t('back_to_blog')}</Link>
          </Button>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default BlogPostDetail;