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
      i18n.changeLanguage(locale);
    } else if (!locale) {
      // If no locale in URL, redirect to default locale
      navigate(`/${defaultLocale}`, { replace: true });
    }
  }, [locale, i18n, navigate, defaultLocale]);

  // Ensure the dir attribute is set correctly on the html element
  useEffect(() => {
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return <Outlet />;
};

export default LocaleWrapper;