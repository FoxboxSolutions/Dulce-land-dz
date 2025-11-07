import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurBoxes from "./pages/OurBoxes";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import { CartProvider } from "./context/CartContext";
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import your i18n configuration

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <I18nextProvider i18n={i18n}> {/* Wrap your app with I18nextProvider */}
        <BrowserRouter>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/our-boxes" element={<OurBoxes />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </I18nextProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;