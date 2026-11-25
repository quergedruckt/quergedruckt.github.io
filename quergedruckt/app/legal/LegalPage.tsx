"use client";

import './legal.scss';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSelect from '../language-select/languageSelect';
import Footer from '../footer/footer';
import { useTranslation } from '../i18n/i18n';

// To add or remove a section: edit the list here and the matching entry under
// legal.<page>.sections in both locale files.
const PAGES = {
  impressum: ['provider', 'contact', 'representative', 'register', 'vat', 'responsible'],
  privacy: ['controller', 'hosting', 'contactForm', 'language', 'rights'],
} as const;

type LegalPageProps = { page: keyof typeof PAGES };

const LegalPage = ({ page }: LegalPageProps) => {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <header className="legal-header">
        <Link href="/" className="legal-logo">
          <Image
            src="/images/Quergedruckt.svg"
            alt="Quergedruckt Logo"
            width={200}
            height={30}
          />
        </Link>
        <LanguageSelect />
      </header>
      <main className="legal-content">
        <Link className="legal-back" href="/">&larr; {t('legal.back')}</Link>
        <h1 className="legal-title">{t(`legal.${page}.title`)}</h1>
        <p className="legal-notice">{t('legal.placeholderNotice')}</p>
        {PAGES[page].map((section) => (
          <section className="legal-section" key={section}>
            <h2>{t(`legal.${page}.sections.${section}.title`)}</h2>
            <p>{t(`legal.${page}.sections.${section}.body`)}</p>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
