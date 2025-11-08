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
    i18n.changeLanguage(lng);
    // Update the URL path to reflect the new locale
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    // Remove the current locale segment if it exists
    if (i18n.languages.includes(pathSegments[0])) {
      pathSegments.shift();
    }
    const newPath = `/${lng}/${pathSegments.join('/')}`;
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