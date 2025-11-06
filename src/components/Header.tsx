"use client";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Import Sheet components

const Header = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu open/close

  return (
    <header className="bg-black/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src="https://i.ibb.co/R4J4mqZG/logo-dulce-website-1.png" alt="Dulcé Land DZ Logo" className="h-[60px]" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/our-boxes">Our Boxes</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild variant="ghost" size="icon" className="relative text-primary hover:text-primary/80">
            <Link to="/cart">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
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
                  <Link to="/" className="text-2xl font-bold text-primary mb-4">
                    <img src="https://i.ibb.co/R4J4mqZG/logo-dulce-website-1.png" alt="Dulcé Land DZ Logo" className="h-[60px]" />
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/">Home</NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/our-boxes">Our Boxes</NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/gallery">Gallery</NavLink>
                </SheetClose>
                <SheetClose asChild>
                  <NavLink to="/contact">Contact</NavLink>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium text-lg"
  >
    {children}
  </Link>
);

export default Header;