"use client";

import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[72px] container mx-auto px-4 py-8">
        <h1 className="text-5xl font-extrabold text-center text-primary mb-12 animate-fade-in-up">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-muted-foreground text-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Your cart is empty. <Link to="/our-boxes" className="text-primary hover:underline">Start shopping!</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 animate-fade-in-up">
              {cartItems.map((item, index) => (
                <div key={item.id} className="flex items-center bg-card p-4 rounded-lg shadow-md border border-border" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                  <div className="flex-grow">
                    <h2 className="text-xl font-semibold text-foreground">{item.name}</h2>
                    <p className="text-muted-foreground">€{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 text-center bg-input text-foreground border-border focus:ring-primary"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      +
                    </Button>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" onClick={clearCart} className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 mt-4">
                Clear Cart
              </Button>
            </div>

            <div className="lg:col-span-1 bg-card p-6 rounded-lg shadow-md border border-border animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-primary mb-4">Order Summary</h2>
              <div className="flex justify-between text-lg mb-2">
                <span>Subtotal:</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-foreground mb-6">
                <span>Total:</span>
                <span>€{getTotalPrice().toFixed(2)}</span>
              </div>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        )}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default CartPage;