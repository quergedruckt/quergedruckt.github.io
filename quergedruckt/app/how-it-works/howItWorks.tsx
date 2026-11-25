"use client";

import './howItWorks.scss';
import Image from 'next/image';
import { useTranslation } from '../i18n/i18n';

const STEPS = [
  { id: 'design', number: '01' },
  { id: 'printing', number: '02' },
  { id: 'delivery', number: '03', bold: true },
];

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="how-it-works">
      <div className="how-it-works-header">
        <p className="section-label">{t('how.label')}</p>
        <h2 className="how-it-works-title">{t('how.title')}</h2>
      </div>
      <div className="how-it-works-content">
        <div className="how-it-works-steps">
          {STEPS.map(({ id, number, bold }) => (
            <div className="step-item" key={id}>
              <div className="step-header">
                <p className="step-number">{number}</p>
                <h3 className={`step-title${bold ? ' step-title-bold' : ''}`}>{t(`how.steps.${id}.title`)}</h3>
              </div>
              <p className="step-description">
                {t(`how.steps.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
        <div className="how-it-works-image">
          <Image
            src="https://www.figma.com/api/mcp/asset/b4efa8b3-d86f-41da-ad32-60eef4fa556e"
            alt=""
            fill
            className="how-it-works-img"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
