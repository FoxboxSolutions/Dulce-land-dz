"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { useParams, Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const BlogPostDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();

  // Extract the current locale from the URL path
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const currentLocale = pathSegments[0] || i18n.language;

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

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
            isArabic ? "font-dg-rawnq" : "font-cinzel"
          )}>
            {blogTitle}
          </h1>
          <img
            src="https://i.ibb.co/Q811111/blog-post-1.jpg" // Placeholder image
            alt={blogTitle}
            className="w-full h-80 object-cover rounded-lg mb-8"
            loading="lazy"
          />
          <p className={cn(
            "text-lg text-light-cream leading-relaxed mb-8",
            isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
          )}>
            {blogContent}
          </p>
          <Button asChild variant="outline" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
            <Link to={getLocalizedPath('/blog')}>{t('back_to_blog')}</Link>
          </Button>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default BlogPostDetail;