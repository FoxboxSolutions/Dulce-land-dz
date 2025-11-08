import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurBoxes from "./pages/OurBoxes";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmation from "./pages/OrderConfirmation";
import BlogPage from "./pages/BlogPage";
import BlogPostDetail from "./pages/BlogPostDetail";
import HowToChoosePerfectBox from "./pages/blog/HowToChoosePerfectBox";
import TheSecretsOfLuxuryChocolate from "./pages/blog/TheSecretsOfLuxuryChocolate";
import OurNewSeasonalCreations from "./pages/blog/OurNewSeasonalCreations";
import TheArtOfPairingSweetsWithDrinks from "./pages/blog/TheArtOfPairingSweetsWithDrinks";
import SweetTraditionsAroundTheWorld from "./pages/blog/SweetTraditionsAroundTheWorld";
import BehindTheScenesADayAtDulceLand from "./pages/blog/BehindTheScenesADayAtDulceLand";
import { CartProvider } from "./context/CartContext";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import LocaleWrapper from "./components/LocaleWrapper"; // Import the new LocaleWrapper

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
              {/* Redirect root to default locale */}
              <Route path="/" element={<Navigate to="/en" replace />} />

              {/* All locale-prefixed routes */}
              <Route path="/:locale" element={<LocaleWrapper />}>
                <Route index element={<Index />} /> {/* /:locale/ */}
                <Route path="our-boxes" element={<OurBoxes />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="checkout" element={<CheckoutPage />} />
                <Route path="order-confirmation" element={<OrderConfirmation />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="blog/how-to-choose-perfect-box" element={<HowToChoosePerfectBox />} />
                <Route path="blog/the-secrets-of-luxury-chocolate" element={<TheSecretsOfLuxuryChocolate />} />
                <Route path="blog/our-new-seasonal-creations" element={<OurNewSeasonalCreations />} />
                <Route path="blog/the-art-of-pairing-sweets-with-drinks" element={<TheArtOfPairingSweetsWithDrinks />} />
                <Route path="blog/sweet-traditions-around-the-world" element={<SweetTraditionsAroundTheWorld />} />
                <Route path="blog/behind-the-scenes-a-day-at-dulce-land" element={<BehindTheScenesADayAtDulceLand />} />
                <Route path="blog/:id" element={<BlogPostDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </I18nextProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;