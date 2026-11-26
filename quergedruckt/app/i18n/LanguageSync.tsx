"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from './i18n';

// The legal pages are German only and set their own title and description (see their page.tsx).
const OWN_METADATA_PATHS = ['/impressum', '/privacy'];

// Keeps <html lang>, the page title and the meta description in sync with the selected language.
const LanguageSync = () => {
  const { t, language } = useTranslation();
  const pathname = (usePathname() ?? '/').replace(/\/$/, '') || '/';
  const hasOwnMetadata = OWN_METADATA_PATHS.includes(pathname);

  useEffect(() => {
    document.documentElement.lang = language;
    if (hasOwnMetadata) return;
    document.title = t('meta.title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'));
  }, [language, t, hasOwnMetadata]);

  return null;
};

export default LanguageSync;
