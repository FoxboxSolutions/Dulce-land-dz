"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    const currentLocaleInI18n = i18n.language; // Get current i18n language before changing it
    i18n.changeLanguage(lng); // Change i18n language

    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    let newPathSegments = [...pathSegments]; // Create a copy to modify

    // If the first segment is the current locale (from i18n), remove it
    if (newPathSegments.length > 0 && newPathSegments[0] === currentLocaleInI18n) {
      newPathSegments.shift();
    }
    
    // Construct the new path with the new locale
    // Ensure that if newPathSegments is empty (e.g., from /en to /fr), it becomes /fr
    const newPath = `/${lng}${newPathSegments.length > 0 ? '/' + newPathSegments.join('/') : ''}`;
    navigate(newPath);
  };

  const getFlag = (lng: string) => {
    switch (lng) {
      case 'en':
        return '🇬🇧'; // UK flag for English
      case 'fr':
        return '🇫🇷'; // French flag for French
      case 'ar':
        return '🇩🇿'; // Algerian flag for Arabic (can be changed to other Arabic-speaking country if preferred)
      default:
        return '🌐'; // Default globe icon
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 text-xl">
          {getFlag(i18n.language)}
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card text-foreground border-border">
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="cursor-pointer hover:bg-secondary">
          🇬🇧 English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('fr')} className="cursor-pointer hover:bg-secondary">
          🇫🇷 Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ar')} className="cursor-pointer hover:bg-secondary">
          🇩🇿 العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;