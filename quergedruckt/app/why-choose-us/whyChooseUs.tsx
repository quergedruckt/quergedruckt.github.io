"use client";

import './whyChooseUs.scss';
import Image from 'next/image';
import { useTranslation } from '../i18n/i18n';

const FEATURES = [
  { id: 'tech', icon: 'https://www.figma.com/api/mcp/asset/394ee60d-a25b-4a4c-9e81-49d5544cfefc', size: 32 },
  { id: 'quality', icon: 'https://www.figma.com/api/mcp/asset/f56c9b8a-d355-4c0b-9dae-6e40bba76901', size: 32, highlighted: true },
  { id: 'eco', icon: 'https://www.figma.com/api/mcp/asset/9311d866-3206-4faf-906c-f9d855ba7345', size: 28 },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="why-choose-us">
      <div className="why-choose-us-image">
        <Image
          src="https://www.figma.com/api/mcp/asset/bec1ee29-72be-477a-92f4-0ac6c41137e2"
          alt=""
          fill
          className="why-choose-us-img"
        />
      </div>
      <div className="why-choose-us-content">
        <div className="why-choose-us-header">
          <p className="section-label">{t('why.label')}</p>
          <h2 className="why-choose-us-title">{t('why.title')}</h2>
        </div>
        <div className="why-choose-us-features">
          {FEATURES.map(({ id, icon, size, highlighted }) => (
            <div className={`why-feature-item${highlighted ? ' highlighted' : ''}`} key={id}>
              <div className="why-feature-header">
                <div className="why-feature-icon">
                  <Image
                    src={icon}
                    alt=""
                    width={size}
                    height={size}
                  />
                </div>
                <h3 className="why-feature-title">{t(`why.items.${id}.title`)}</h3>
              </div>
              <p className="why-feature-description">
                {t(`why.items.${id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
