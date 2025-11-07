"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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