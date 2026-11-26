"use client";

import './services.scss';
import { Cog, Factory, Printer, Zap, type LucideIcon } from 'lucide-react';
import { useTranslation } from '../i18n/i18n';

type Service = { id: string; Icon: LucideIcon; highlighted?: boolean };

const SERVICE_ROWS: Service[][] = [
  [
    { id: 'prototyping', Icon: Zap },
    { id: 'printing', Icon: Printer },
  ],
  [
    { id: 'production', Icon: Factory },
    { id: 'reverse', Icon: Cog },
  ],
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services" id="services">
      <div className="services-header">
        <div className="services-title-section">
          <p className="section-label">{t('services.label')}</p>
          <h2 className="services-title">{t('services.title')}</h2>
        </div>
        {/* TODO: "Discover More" is hidden until its destination is decided.
            <button className="btn-outline">Discover More</button> */}
      </div>
      <div className="services-grid">
        {SERVICE_ROWS.map((row, rowIndex) => (
          <div className="services-row" key={rowIndex}>
            {row.map(({ id, Icon, highlighted }) => (
              <div className={`service-card${highlighted ? ' highlighted' : ''}`} key={id}>
                <div className="service-card-content">
                  <div className="service-icon-wrapper">
                    <div className={`service-icon-bg${highlighted ? ' highlighted' : ''}`}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="service-details">
                    <div className="service-text">
                      <h3 className="service-title">{t(`services.items.${id}.title`)}</h3>
                      <p className="service-description">
                        {t(`services.items.${id}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
