"use client";

import './faq.scss';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../i18n/i18n';

// Question and answer text lives in the locale files (faq.items.<id>).
const FAQ_IDS = ['speed', 'materials', 'largeParts', 'noFile', 'designHelp', 'shipping'];

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
                <div className="faq-question-wrapper" onClick={() => toggle(index)}>
                  <div className="faq-question-content">
                    <h3 className="faq-question">
                      <button
                        type="button"
                        className="faq-question-button"
                        aria-expanded={isOpen}
                        aria-controls={isOpen ? `faq-answer-${id}` : undefined}
                      >
                        {t(`faq.items.${id}.question`)}
                      </button>
                    </h3>
                    {isOpen && <p className="faq-answer" id={`faq-answer-${id}`}>{t(`faq.items.${id}.answer`)}</p>}
                  </div>
                  <div className="faq-icon">
                    <ChevronDown size={24} className={isOpen ? 'faq-arrow' : undefined} />
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
