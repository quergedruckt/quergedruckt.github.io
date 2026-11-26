"use client";

import './whyChooseUs.scss';
import Image from 'next/image';
import { Handshake, Layers, PencilRuler } from 'lucide-react';
import { useTranslation } from '../i18n/i18n';

const FEATURES = [
  { id: 'tech', Icon: PencilRuler },
  { id: 'quality', Icon: Handshake, highlighted: true },
  { id: 'eco', Icon: Layers },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  return (
    <div className="why-choose-us">
      <div className="why-choose-us-image">
        <Image
          src="/images/why-us.svg"
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
          {FEATURES.map(({ id, Icon, highlighted }) => (
            <div className={`why-feature-item${highlighted ? ' highlighted' : ''}`} key={id}>
              <div className="why-feature-header">
                <div className="why-feature-icon">
                  <Icon size={32} />
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
