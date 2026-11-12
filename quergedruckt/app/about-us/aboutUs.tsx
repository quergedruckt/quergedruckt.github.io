"use client";

import './aboutUs.scss';
import Image from 'next/image';
import { useTranslation } from '../i18n/i18n';

const FEATURE_ICON = 'https://www.figma.com/api/mcp/asset/a9d19fc8-b2c6-4ce3-b734-d29ddd839fd9';
const FEATURES = ['insight', 'scalable', 'audience', 'strategy'];

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us" id="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <div className="about-us-header">
            <p className="section-label">{t('about.label')}</p>
            <div className="about-us-title-section">
              <h2 className="about-us-title">{t('about.title')}</h2>
              <p className="about-us-description">
                {t('about.description')}
              </p>
            </div>
          </div>
          <div className="about-us-features">
            {FEATURES.map((feature) => (
              <div className="feature-item" key={feature}>
                <div className="feature-icon">
                  <Image
                    src={FEATURE_ICON}
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <p className="feature-text">{t(`about.features.${feature}`)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-us-image">
          <Image
            src="https://www.figma.com/api/mcp/asset/f28c7ac6-6ce3-4512-93ab-775f85fb147c"
            alt=""
            fill
            className="about-us-img"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
