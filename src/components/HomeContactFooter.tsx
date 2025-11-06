"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Whatsapp } from 'lucide-react';

const HomeContactFooter = () => {
  return (
    <footer className="bg-black text-foreground py-16 md:py-24 border-t border-primary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 animate-fade-in-up">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold flex items-center gap-3 shadow-lg hover:shadow-green-500/50 transition-all duration-300">
              <a href="https://wa.me/YOURPHONENUMBER" target="_blank" rel="noopener noreferrer">
                <Whatsapp className="h-6 w-6 text-primary" /> {/* Gold icon on green button */}
                WhatsApp Us
              </a>
            </Button>
          </div>
          <div className="space-y-4 text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="flex items-center justify-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" /> info@dulceland.dz
            </p>
            <p className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" /> 123 Sweet Street, Algiers, Algeria
            </p>
            <p className="flex items-center justify-center gap-3 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" /> +213 555 123 456
            </p>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-8 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Dulcé Land DZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default HomeContactFooter;