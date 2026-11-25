"use client";

import './hero.scss';
import Image from 'next/image';
import { useState } from 'react';
import LanguageSelect from '../language-select/languageSelect';
import { useTranslation } from '../i18n/i18n';
import { MAIN_NAV, linkProps } from '../config/site';

const Hero = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero" id="home">
      <div className="hero-background">
        <Image
          src="https://www.figma.com/api/mcp/asset/82b4404f-ae80-4102-a83f-81b3189633f7"
          alt=""
          fill
          className="hero-bg-image"
        />
      </div>
      <div className="hero-content">
        <div className="hero-header">
          <div className="hero-logo">
            <Image
              src="/images/Quergedruckt.svg"
              alt="Quergedruckt Logo"
              width={200}
              height={30}
            />
          </div>
          <div className={`hero-navigation${menuOpen ? ' open' : ''}`} id="hero-navigation">
            {MAIN_NAV.filter((item) => item.href).map((item) => (
              <a
                key={item.id}
                className={`nav-item${item.id === 'home' ? ' active' : ''}`}
                {...linkProps(item.href)}
                onClick={() => setMenuOpen(false)}
              >
                {t(`nav.${item.id}`)}
              </a>
            ))}
          </div>
          <div className="hero-actions">
            <div className="language-select-wrapper">
              <LanguageSelect />
            </div>
            <a className="btn-primary" href="#contact">{t('common.getAQuote')}</a>
            <button
              type="button"
              className="hero-menu-toggle"
              aria-label={t('nav.menu')}
              aria-expanded={menuOpen}
              aria-controls="hero-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('hero.titleLine1')}<br />{t('hero.titleLine2')}
            </h1>
          </div>
          <div className="hero-description">
            <p className="hero-description-text">
              {t('hero.description')}
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href="#contact">{t('common.getAQuote')}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
