"use client";

import { useTranslation } from '../i18n/i18n';

// First focusable element on every page. Hidden until it receives keyboard focus.
const SkipLink = () => {
  const { t } = useTranslation();
  return (
    <a className="skip-link" href="#main-content">
      {t('a11y.skipToContent')}
    </a>
  );
};

export default SkipLink;
