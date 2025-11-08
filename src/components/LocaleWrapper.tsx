"use client";

import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LocaleWrapper = () => {
  const { locale } = useParams<{ locale: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const defaultLocale = 'en'; // Your default locale

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      console.log(`LocaleWrapper: Changing language from ${i18n.language} to ${locale}`);
      i18n.changeLanguage(locale);
    } else if (!locale) {
      console.log(`LocaleWrapper: No locale in URL, redirecting to /${defaultLocale}`);
      navigate(`/${defaultLocale}`, { replace: true });
    }
  }, [locale, i18n, navigate, defaultLocale]);

  // Ensure the dir attribute is set correctly on the html element
  useEffect(() => {
    console.log(`LocaleWrapper: Setting dir attribute for language ${i18n.language}`);
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return <Outlet />;
};

export default LocaleWrapper;