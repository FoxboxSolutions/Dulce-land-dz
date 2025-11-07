"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogPostCard from './BlogPostCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const blogPosts = [
  {
    id: '1',
    image: 'https://i.ibb.co/Q811111/blog-post-1.jpg',
    titleKey: 'blog_post_1_title',
    summaryKey: 'blog_post_1_summary',
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
];

const BlogSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[28px] md:text-[40px] font-cinzel font-extrabold text-primary mb-4"
        >
          {t('blog_section_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl font-cormorant-garamond italic text-light-cream mb-12"
        >
          {t('blog_section_subtitle')}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
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
          transition={{ duration: 0.8, ease: "easeOut", delay: blogPosts.length * 0.15 + 0.2 }}
        >
          <Button asChild size="lg" className="px-10 py-4 text-xl bg-primary text-primary-foreground border border-primary hover:bg-transparent hover:text-primary transition-all duration-500 ease-custom-ease">
            <Link to="/blog">{t('view_all_articles')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;