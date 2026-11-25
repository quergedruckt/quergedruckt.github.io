"use client";

import '../header/header.scss'
import Image from 'next/image'
import LanguageSelect from '../language-select/languageSelect';
import { useTranslation } from '../i18n/i18n';
import { MAIN_NAV, linkProps } from '../config/site';

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className="header">
            <div className="logo">
                <Image src='/images/Quergedruckt.svg' alt='Quergedruckt Logo' fill className='quergedrucktLogo' /></div>
            <div className="navigationItems">
                {MAIN_NAV.filter((item) => item.href).map((item) => (
                    <a key={item.id} className="btn btn-text" {...linkProps(item.href)}>
                        {t(`nav.${item.id}`)}
                    </a>
                ))}
            </div>
            <div className="actions">
                <LanguageSelect />
                <a className="btn btn-primary" href="#contact">{t('common.getAQuote')}</a>
            </div>
        </div>
    )
}

export default Header;
