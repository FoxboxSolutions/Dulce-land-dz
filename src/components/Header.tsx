"use client";

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Button } from '@/components/ui/button';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Extract the current locale from the URL
  const currentLocale = i18n.language;

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={getLocalizedPath(to)}
      className="text-light-cream hover:text-primary transition-colors duration-200 font-medium text-lg"
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-black/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to={getLocalizedPath('/our-boxes')} className="text-2xl font-bold text-primary">
          <img src="https://i.ibb.co/R4J4mqZG/logo-dulce-website-1.png" alt="Dulce Land DZ Logo" className="h-[60px]" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/our-boxes">{t('home')}</NavLink> {/* Changed to /our-boxes */}
          <NavLink to="/our-boxes">{t('our_boxes')}</NavLink>
          <NavLink to="/gallery">{t('gallery')}</NavLink>
          <NavLink to="/blog">{t('blog')}</NavLink>
          <NavLink to="/contact">{t('contact')}</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button asChild variant="ghost" size="icon" className="relative text-primary hover:text-primary/80">
            <Link to={getLocalizedPath('/cart')}>
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">{t('shopping_cart')}</span>
            </Link>
          </Button>
          
          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-sidebar text-sidebar-foreground border-sidebar-border">
              <div className="flex flex-col items-center space-y-6 pt-10">
                <SheetClose asChild>
                  <Link to={getLocalizedPath('/our-boxes')} className="text-2xl font-bold text-primary mb-4">
                    <img src="https://i.ibb.co/R4J4mqZG/logo-dulce-website-1.png" alt="Dulce Land DZ Logo" className="h-[60px]" />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/our-boxes">{t('home')}</NavLink> {/* Changed to /our-boxes */}
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/our-boxes">{t('our_boxes')}</NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/gallery">{t('gallery')}</NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/blog">{t('blog')}</NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/contact">{t('contact')}</NavLink>
                </SheetClose>
                <div className="pt-4">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;