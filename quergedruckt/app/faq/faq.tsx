"use client";

import './faq.scss';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from '../i18n/i18n';

const ICON_OPEN = 'https://www.figma.com/api/mcp/asset/92878b1d-e5f5-49a8-9f00-5ea314170080';
const ICON_CLOSED = 'https://www.figma.com/api/mcp/asset/9adbde46-3b54-4dd1-9ec5-9326cf9ee207';

// Question and answer text lives in the locale files (faq.items.<id>).
// TODO: the answers are still the placeholder copy from the Figma design.
const FAQ_IDS = ['speed', 'materials', 'largeParts', 'resale', 'designHelp', 'shipping'];

const FAQ = () => {
  const { t } = useTranslation();
  // The first item starts open, as in the design. Set to null to start all closed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <div className="faq" id="faq">
      <div className="faq-content">
        <div className="faq-text">
          <div className="faq-header">
            <h2 className="faq-title">{t('faq.title')}</h2>
            <p className="faq-description">
              {t('faq.description')}
            </p>
          </div>
          <a className="btn-primary" href="#contact">{t('faq.contactUs')}</a>
        </div>
        <div className="faq-items">
          {FAQ_IDS.map((id, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? ' expanded' : ''}`} key={id}>
                <div
                  className="faq-question-wrapper"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggle(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(index);
                    }
                  }}
                >
                  <div className="faq-question-content">
                    <h3 className="faq-question">{t(`faq.items.${id}.question`)}</h3>
                    {isOpen && <p className="faq-answer">{t(`faq.items.${id}.answer`)}</p>}
                  </div>
                  <div className="faq-icon">
                    <Image
                      src={isOpen ? ICON_OPEN : ICON_CLOSED}
                      alt=""
                      width={24}
                      height={24}
                      className={isOpen ? 'faq-arrow' : undefined}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
