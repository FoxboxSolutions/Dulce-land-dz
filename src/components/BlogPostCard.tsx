"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface BlogPostCardProps {
  id: string;
  image: string;
  titleKey: string;
  summaryKey: string;
}

const BlogPostCard = ({ id, image, titleKey, summaryKey }: BlogPostCardProps) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation(); // Get current location

  // Extract the current locale from the URL path
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  const currentLocale = pathSegments[0] || i18n.language; // Fallback to i18n.language if not in path

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

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
          <CardTitle className={cn(
            "text-xl font-bold text-product-title mb-2 line-clamp-2",
            isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
          )}>
            {t(titleKey)}
          </CardTitle>
          <p className="text-light-cream text-sm font-cormorant-garamond line-clamp-2">{t(summaryKey)}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button asChild className="w-full bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 ease-custom-ease">
            <Link to={getLocalizedPath(`/blog/${id}`)}>{t('read_more')}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogPostCard;