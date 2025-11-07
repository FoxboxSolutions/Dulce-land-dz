"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface BlogPostCardProps {
  id: string;
  image: string;
  titleKey: string;
  summaryKey: string;
}

const BlogPostCard = ({ id, image, titleKey, summaryKey }: BlogPostCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(210, 154, 51, 0.4)" }} // Gold glow effect
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-full" // Ensure card takes full height for consistent grid
    >
      <Card className="w-full h-full flex flex-col bg-card text-card-foreground border-2 border-primary/30 shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="p-0">
          <img
            src={image}
            alt={t(titleKey)}
            className="w-full h-48 object-cover rounded-t-lg"
            loading="lazy" // Lazy loading for images
          />
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-bold text-product-title mb-2 line-clamp-2">{t(titleKey)}</CardTitle>
          <p className="text-light-cream text-sm font-cormorant-garamond line-clamp-2">{t(summaryKey)}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button asChild className="w-full bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 ease-custom-ease">
            <Link to={`/blog/${id}`}>{t('read_more')}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogPostCard;