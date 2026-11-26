"use client";

import './contact.scss';
import Image from 'next/image';
import { type FormEvent, useState } from 'react';
import { useTranslation } from '../i18n/i18n';
import { SITE_LINKS, linkProps } from '../config/site';

// Form endpoint that forwards submissions to an email address (Formspree-compatible:
// accepts a JSON POST). Set it in .env.local, see .env.example.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Status =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'success' }
  | { state: 'error'; messageKey: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { t, language } = useTranslation();
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.state === 'sending') return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '').trim();

    // Honeypot: real visitors never fill this hidden field, bots often do.
    if (value('_gotcha')) {
      setStatus({ state: 'success' });
      return;
    }

    const firstName = value('firstName');
    const lastName = value('lastName');
    const email = value('email');
    const phone = value('phone');
    const message = value('message');

    if (!firstName || !lastName || !email || !message) {
      setStatus({ state: 'error', messageKey: 'contact.form.errorRequired' });
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      setStatus({ state: 'error', messageKey: 'contact.form.errorEmail' });
      return;
    }
    if (!consent) {
      setStatus({ state: 'error', messageKey: 'contact.form.errorConsent' });
      return;
    }
    if (!CONTACT_ENDPOINT) {
      console.error('NEXT_PUBLIC_CONTACT_ENDPOINT is not set, the contact form cannot send.');
      setStatus({ state: 'error', messageKey: 'contact.form.error' });
      return;
    }

    setStatus({ state: 'sending' });
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          firstName,
          lastName,
          email,
          phone,
          message,
          language,
          _subject: `New message from ${firstName} ${lastName} (quergedruckt website)`,
        }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      form.reset();
      setConsent(false);
      setStatus({ state: 'success' });
    } catch (error) {
      console.error(error);
      setStatus({ state: 'error', messageKey: 'contact.form.error' });
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-card">
        <div className="contact-info">
          <div className="contact-header">
            <div className="contact-badge">
              <p className="badge-text">{t('contact.badge')}</p>
            </div>
            <div className="contact-title-section">
              <h2 className="contact-title">{t('contact.title')}</h2>
              <p className="contact-description">
                {t('contact.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label className="field-label" htmlFor="contact-first-name">
                  <span className="label-text">{t('contact.form.firstName')}</span>
                  <span className="label-required">*</span>
                </label>
                <div className="field-input">
                  <input
                    id="contact-first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder={t('contact.form.firstName')}
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="field-label" htmlFor="contact-last-name">
                  <span className="label-text">{t('contact.form.lastName')}</span>
                  <span className="label-required">*</span>
                </label>
                <div className="field-input">
                  <input
                    id="contact-last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder={t('contact.form.lastName')}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-field">
              <label className="field-label" htmlFor="contact-email">
                <span className="label-text">{t('contact.form.email')}</span>
                <span className="label-required">*</span>
              </label>
              <div className="field-input">
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label className="field-label" htmlFor="contact-phone">
                <span className="label-text">{t('contact.form.phone')}</span>
              </label>
              <div className="field-input">
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={t('contact.form.phonePlaceholder')}
                />
              </div>
            </div>
            <div className="form-field message">
              <label className="field-label" htmlFor="contact-message">
                <span className="label-text">{t('contact.form.message')}</span>
                <span className="label-required">*</span>
              </label>
              <div className="field-input message-input">
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
                <div className="message-icon">
                  <Image
                    src="https://www.figma.com/api/mcp/asset/6c3d6f4f-afff-4ca7-a9d5-dc6d3ca10e1b"
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            </div>
            {/* Honeypot field, hidden from people */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="form-honeypot"
            />
            <label className="form-checkbox">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span className="checkbox" aria-hidden="true"></span>
              <span className="checkbox-text">
                {t('contact.form.consentPrefix')}
                {SITE_LINKS.privacyPolicy ? (
                  <a
                    className="link"
                    {...linkProps(SITE_LINKS.privacyPolicy)}
                    // The link sits inside the checkbox label, so don't toggle the checkbox on click.
                    onClick={(event) => event.stopPropagation()}
                  >
                    {t('contact.form.privacyPolicy')}
                  </a>
                ) : (
                  <span className="link">{t('contact.form.privacyPolicy')}</span>
                )}
                {t('contact.form.consentSuffix')}
              </span>
            </label>
            <div className="form-status" role="status" aria-live="polite">
              {status.state === 'sending' && <p>{t('contact.form.sending')}</p>}
              {status.state === 'success' && <p className="success">{t('contact.form.success')}</p>}
              {status.state === 'error' && <p className="error">{t(status.messageKey)}</p>}
            </div>
            <button className="btn-submit" type="submit" disabled={status.state === 'sending'}>
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
