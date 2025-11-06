"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[72px] container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg text-center animate-fade-in-up">
          <CheckCircle className="h-24 w-24 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold text-primary mb-4">Order Confirmed!</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Thank you for your purchase from Dulce Land. Your order has been successfully placed and will be processed shortly.
          </p>
          <p className="text-md text-muted-foreground mb-8">
            You will receive an email confirmation with your order details.
          </p>
          <div className="flex flex-col space-y-4">
            <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/our-boxes">Continue Shopping</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default OrderConfirmation;