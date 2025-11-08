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
import BlogPage from "./pages/BlogPage"; // Import BlogPage
import BlogPostDetail from "./pages/BlogPostDetail"; // Import BlogPostDetail
import HowToChoosePerfectBox from "./pages/blog/HowToChoosePerfectBox"; // Import the new blog post component
import TheSecretsOfLuxuryChocolate from "./pages/blog/TheSecretsOfLuxuryChocolate"; // Import the new blog post component
import { CartProvider } from "./context/CartContext";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <I18nextProvider i18n={i18n}>
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
              <Route path="/blog" element={<BlogPage />} /> {/* New blog listing route */}
              <Route path="/blog/how-to-choose-perfect-box" element={<HowToChoosePerfectBox />} /> {/* New specific blog post route */}
              <Route path="/blog/the-secrets-of-luxury-chocolate" element={<TheSecretsOfLuxuryChocolate />} /> {/* New specific blog post route */}
              <Route path="/blog/:id" element={<BlogPostDetail />} /> {/* New individual blog post route */}
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