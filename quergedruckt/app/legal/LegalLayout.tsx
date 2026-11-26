"use client";

import './legal.scss';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Footer from '../footer/footer';
import { useTranslation } from '../i18n/i18n';

// Shared frame (logo, back link, footer) for the Impressum and the privacy policy.
// The text of each page lives in app/impressum/page.tsx and app/privacy/page.tsx.
const LegalLayout = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link href="/" className="legal-logo">
          <Image
            src="/images/Quergedruckt.svg"
            alt={t('a11y.logoHome')}
            width={200}
            height={30}
          />
        </Link>
      </header>
      <main className="legal-content" id="main-content" tabIndex={-1}>
        <Link className="legal-back" href="/">&larr; {t('legal.back')}</Link>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
