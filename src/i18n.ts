import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// LanguageDetector is removed as LocaleWrapper will handle language detection from the URL.
// import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from '../public/locales/en/translation.json';
import frTranslation from '../public/locales/fr/translation.json';
import arTranslation from '../public/locales/ar/translation.json';

i18n
  // .use(LanguageDetector) // Removed to prevent conflicts with URL-based language setting
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    fallbackLng: 'en', // Fallback language if current language is not available
    debug: true, // Enable debug mode for development
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    // detection: { // Removed as LocaleWrapper will handle language detection
    //   order: ['localStorage', 'navigator'], // Order of language detection
    //   caches: ['localStorage'], // Cache detected language
    // },
  });

export default i18n;