"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from './i18n';

// Pages with their own title. Everything else uses meta.title.
const PAGE_TITLE_KEYS: Record<string, string> = {
  '/impressum': 'legal.impressum.metaTitle',
  '/privacy': 'legal.privacy.metaTitle',
};

// Keeps <html lang>, the page title and the meta description in sync with the selected language.
const LanguageSync = () => {
  const { t, language } = useTranslation();
  const pathname = (usePathname() ?? '/').replace(/\/$/, '') || '/';
  const titleKey = PAGE_TITLE_KEYS[pathname] ?? 'meta.title';

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t(titleKey);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'));
  }, [language, t, titleKey]);

  return null;
};

export default LanguageSync;
