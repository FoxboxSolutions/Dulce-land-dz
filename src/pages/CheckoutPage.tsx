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
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { cn } from '@/lib/utils'; // Import cn for conditional classNames

const CheckoutPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("cashOnDelivery");
  const { t, i18n } = useTranslation(); // Initialize useTranslation and get i18n object
  const isArabic = i18n.language === 'ar'; // Check if current language is Arabic

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error(t('cart_empty_toast'));
      return;
    }

    // Simulate order processing
    console.log("Order placed!", { cartItems, total: getTotalPrice(), paymentMethod: selectedPaymentMethod });
    clearCart(); // Clear cart after successful order
    toast.success(t('order_placed_success_toast'));
    navigate('/order-confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-[92px] container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-card p-8 rounded-lg shadow-lg animate-fade-in-up">
          <h1 className={cn(
            "text-4xl font-extrabold text-center text-primary mb-6",
            isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
          )}>
            {t('checkout_title')}
          </h1>
          <p className={cn(
            "text-center text-light-cream mb-8",
            isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
          )}>
            {t('checkout_description')}
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className={cn(
              "text-2xl font-semibold text-foreground mb-4",
              isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
            )}>
              {t('shipping_information')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('first_name')}</Label>
                <Input id="firstName" type="text" placeholder={t('first_name')} required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
              <div>
                <Label htmlFor="lastName" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('last_name')}</Label>
                <Input id="lastName" type="text" placeholder={t('last_name')} required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="address" className={cn(
                "text-foreground",
                isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
              )}>{t('address')}</Label>
              <Input id="address" type="text" placeholder={t('address')} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('city')}</Label>
                <Input id="city" type="text" placeholder={t('city')} required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
              <div>
                <Label htmlFor="state" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('state_province')}</Label>
                <Input id="state" type="text" placeholder={t('state_province')} required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
              <div>
                <Label htmlFor="zip" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('zip_code')}</Label>
                <Input id="zip" type="text" placeholder={t('zip_code')} required className="bg-input text-foreground border-border focus:ring-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className={cn(
                "text-foreground",
                isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
              )}>{t('phone_number')}</Label>
              <Input id="phone" type="tel" placeholder={t('phone_number')} required className="bg-input text-foreground border-border focus:ring-primary" />
            </div>

            <h2 className={cn(
              "text-2xl font-semibold text-foreground mb-4 pt-6",
              isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
            )}>
              {t('payment_method')}
            </h2>
            <RadioGroup
              defaultValue="cashOnDelivery"
              value={selectedPaymentMethod}
              onValueChange={setSelectedPaymentMethod}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cashOnDelivery" id="cashOnDelivery" />
                <Label htmlFor="cashOnDelivery" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('cash_on_delivery')}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="creditCard" id="creditCard" />
                <Label htmlFor="creditCard" className={cn(
                  "text-foreground",
                  isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                )}>{t('credit_card')}</Label>
              </div>
            </RadioGroup>

            {selectedPaymentMethod === "creditCard" && (
              <div className="space-y-6 pt-4">
                <h3 className={cn(
                  "text-xl font-semibold text-foreground",
                  isArabic ? "font-dg-rawnq" : "font-cinzel" // Apply DG-Rawnq conditionally
                )}>
                  {t('credit_card_details')}
                </h3>
                <div>
                  <Label htmlFor="cardNumber" className={cn(
                    "text-foreground",
                    isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                  )}>{t('card_number')}</Label>
                  <Input id="cardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" required={selectedPaymentMethod === "creditCard"} className="bg-input text-foreground border-border focus:ring-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="expiry" className={cn(
                      "text-foreground",
                      isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                    )}>{t('expiry_date')}</Label>
                    <Input id="expiry" type="text" placeholder="MM/YY" required={selectedPaymentMethod === "creditCard"} className="bg-input text-foreground border-border focus:ring-primary" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="cvv" className={cn(
                      "text-foreground",
                      isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
                    )}>{t('cvv')}</Label>
                    <Input id="cvv" type="text" placeholder="CVV" required={selectedPaymentMethod === "creditCard"} className="bg-input text-foreground border-border focus:ring-primary" />
                  </div>
                </div>
              </div>
            )}

            <div className={cn(
              "text-2xl font-bold text-right text-foreground pt-6",
              isArabic ? "font-elgharib-alwisahafa" : "font-cormorant-garamond" // Apply Elgharib-AlwiSahafa conditionally
            )}>
              {t('total')} DA{getTotalPrice().toFixed(2)}
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              {t('place_order')}
            </Button>
          </form>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default CheckoutPage;