"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { useTranslation } from 'react-i18next';

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
          {/* Placeholder for future blog posts */}
          <div className="bg-card p-6 rounded-lg shadow-md border border-border animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">{t('coming_soon')}</h3>
            <p className="text-light-cream font-cormorant-garamond">{t('more_articles_soon')}</p>
          </div>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default BlogPage;