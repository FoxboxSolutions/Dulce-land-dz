"use client";

import React, { useState } from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("cashOnDelivery");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error("Your cart is empty. Please add items before checking out.");
      return;
    }

    // Simulate order processing
    console.log("Order placed!", { cartItems, total: getTotalPrice(), paymentMethod: selectedPaymentMethod });
    clearCart(); // Clear cart after successful order
    toast.success("Order placed successfully!");
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-card p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h1 className="text-4xl font-cinzel font-extrabold text-center text-primary mb-6">Checkout</h1>
          <p className="text-center text-muted-foreground mb-8">
            Please fill in your details to complete your order.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                <Input id="firstName" type="text" placeholder="First Name" required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Last Name" required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="address" className="text-foreground">Address</Label>
              <Input id="address" type="text" placeholder="Street Address" required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city" className="text-foreground">City</Label>
                <Input id="city" type="text" placeholder="City" required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
              <div>
                <Label htmlFor="state" className="text-foreground">State/Province</Label>
                <Input id="state" type="text" placeholder="State/Province" required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
              <div>
                <Label htmlFor="zip" className="text-foreground">Zip Code</Label>
                <Input id="zip" type="text" placeholder="Zip Code" required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Phone Number" required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>

            <h2 className="text-2xl font-semibold text-foreground mb-4 pt-6">Payment Method</h2>
            <RadioGroup
              defaultValue="cashOnDelivery"
              value={selectedPaymentMethod}
              onValueChange={setSelectedPaymentMethod}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" />
                <Label htmlFor="cashOnDelivery" className="text-foreground">Cash on Delivery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="creditCard" id="creditCard" />
                <Label htmlFor="creditCard" className="text-foreground">Credit Card</Label>
              </div>
            </RadioGroup>

            {selectedPaymentMethod === "creditCard" && (
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-semibold text-foreground">Credit Card Details</h3>
                <div>
                  <Label htmlFor="cardNumber" className="text-foreground">Card Number</Label>
                  <Input id="cardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" required={selectedPaymentMethod === "creditCard"} className="bg-input text-foreground border-border focus:ring-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="expiry" className="text-foreground">Expiry Date</Label>
                    <Input id="expiry" type="text" placeholder="MM/YY" required={selectedPaymentMethod === "creditCard"} className="bg-input text-foreground border-border focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="cvv" className="text-foreground">CVV</Label>
                    <Input id="cvv" type="text" placeholder="CVV" required={selectedPaymentMethod === "creditCard"} className="bg-input text-foreground border-border focus:ring-primary" />
                  </div>
                </div>
              </div>
            )}

            <div className="text-2xl font-bold text-right text-foreground pt-6">
              Total: DA{getTotalPrice().toFixed(2)}
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Place Order
            </Button>
          </form>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default CheckoutPage;