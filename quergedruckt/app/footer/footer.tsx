"use client";

import './footer.scss';
import Image from 'next/image';
import { Fragment } from 'react';
import { useTranslation } from '../i18n/i18n';
import { FOOTER_NAV, LEGAL_LINKS, linkProps } from '../config/site';

const SOCIAL_ICONS = [
  { src: 'https://www.figma.com/api/mcp/asset/ec41deb2-edd3-4c36-993c-7f056db03b35', size: 18 },
  { src: 'https://www.figma.com/api/mcp/asset/2a508c81-ed63-4e4c-aca1-d45907b05ac3', size: 20 },
  { src: 'https://www.figma.com/api/mcp/asset/15fce118-2e81-4996-b00b-23408711200d', size: 20 },
  { src: 'https://www.figma.com/api/mcp/asset/791a3252-461e-48b8-bf68-3e0024e745ee', size: 20 },
  { src: 'https://www.figma.com/api/mcp/asset/4a506562-1146-4b49-94f0-44f9cb5080fe', size: 20 },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            src="/images/Quergedruckt.svg"
            alt="Quergedruckt Logo"
            width={200}
            height={30}
          />
        </div>
        <div className="footer-navigation">
          {FOOTER_NAV.map((item, index) => (
            <Fragment key={item.id}>
              {index > 0 && <div className="footer-dot"></div>}
              <a className="footer-nav-item" {...linkProps(item.href)}>{t(`nav.${item.id}`)}</a>
            </Fragment>
          ))}
        </div>
        <div className="footer-social">
          {SOCIAL_ICONS.map(({ src, size }) => (
            <div className="social-icon" key={src}>
              <Image
                src={src}
                alt=""
                width={size}
                height={size}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">{t('footer.copyright')}</p>
        <div className="footer-links">
          {LEGAL_LINKS.map(({ id, labelKey, href }) =>
            href ? (
              <a key={id} className="footer-link" {...linkProps(href)}>{t(labelKey)}</a>
            ) : (
              <p key={id} className="footer-link">{t(labelKey)}</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
