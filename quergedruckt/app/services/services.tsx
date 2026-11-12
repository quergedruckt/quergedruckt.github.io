"use client";

import './services.scss';
import Image from 'next/image';
import { useTranslation } from '../i18n/i18n';

const ARROW = 'https://www.figma.com/api/mcp/asset/f4c9455e-9458-40aa-8443-bec0bb536b17';
const ARROW_HIGHLIGHTED = 'https://www.figma.com/api/mcp/asset/a22f620f-4cad-45ef-8123-4597ed3dfc86';

type Service = { id: string; icon: string; highlighted?: boolean };

const SERVICE_ROWS: Service[][] = [
  [
    { id: 'prototyping', icon: 'https://www.figma.com/api/mcp/asset/ac00708f-84eb-4b7a-8ae2-7d6c2881fe6e' },
    { id: 'design', icon: 'https://www.figma.com/api/mcp/asset/b4c8e385-be5c-4bc0-b170-c688d4083bdc', highlighted: true },
    { id: 'printing', icon: 'https://www.figma.com/api/mcp/asset/10fe9b44-cfbe-4f7d-aa87-65cc3e79d4de' },
  ],
  [
    { id: 'scanning', icon: 'https://www.figma.com/api/mcp/asset/38476bab-c1bb-455e-b7ab-1f52d2599b8c' },
    { id: 'production', icon: 'https://www.figma.com/api/mcp/asset/525a239c-07db-41e1-9d5d-fd7e531e06e3' },
    { id: 'reverse', icon: 'https://www.figma.com/api/mcp/asset/4f2bf326-2df2-4d81-8662-039ba0aca739' },
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
            {row.map(({ id, icon, highlighted }) => (
              <div className={`service-card${highlighted ? ' highlighted' : ''}`} key={id}>
                <div className="service-card-content">
                  <div className="service-icon-wrapper">
                    <div className={`service-icon-bg${highlighted ? ' highlighted' : ''}`}>
                      <Image
                        src={icon}
                        alt=""
                        width={24}
                        height={24}
                      />
                    </div>
                  </div>
                  <div className="service-details">
                    <div className="service-text">
                      <h3 className="service-title">{t(`services.items.${id}.title`)}</h3>
                      <p className="service-description">
                        {t(`services.items.${id}.description`)}
                      </p>
                    </div>
                    <div className="service-link">
                      <p className={`link-text${highlighted ? ' highlighted' : ''}`}>{t('common.learnMore')}</p>
                      <div className="link-arrow">
                        <Image
                          src={highlighted ? ARROW_HIGHLIGHTED : ARROW}
                          alt=""
                          width={20}
                          height={20}
                          className="arrow-icon"
                        />
                      </div>
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
