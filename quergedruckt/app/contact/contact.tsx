"use client";

import './contact.scss';
import { type FormEvent, useState } from 'react';
import { useTranslation } from '../i18n/i18n';
import { SITE_LINKS, linkProps } from '../config/site';

// Form endpoint that forwards submissions to an email address (Formspree-compatible:
// accepts a JSON POST). Set it in .env.local, see .env.example.
const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type FieldName = 'firstName' | 'lastName' | 'email' | 'message' | 'consent';

// Used to move focus to the field that caused a validation error.
const FIELD_IDS: Record<FieldName, string> = {
  firstName: 'contact-first-name',
  lastName: 'contact-last-name',
  email: 'contact-email',
  message: 'contact-message',
  consent: 'contact-consent',
};

type Status =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'success' }
  | { state: 'error'; messageKey: string; field?: FieldName };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { t, language } = useTranslation();
  const [status, setStatus] = useState<Status>({ state: 'idle' });
  const [consent, setConsent] = useState(false);

  // Marks a field as invalid and links it to the error message for screen readers.
  const invalidProps = (field: FieldName) =>
    status.state === 'error' && status.field === field
      ? { 'aria-invalid': true as const, 'aria-describedby': 'contact-form-status' }
      : {};

  const fail = (messageKey: string, field?: FieldName) => {
    setStatus({ state: 'error', messageKey, field });
    if (field) document.getElementById(FIELD_IDS[field])?.focus();
  };

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

    const firstMissing: FieldName | undefined = !firstName ? 'firstName'
      : !lastName ? 'lastName'
      : !email ? 'email'
      : !message ? 'message'
      : undefined;
    if (firstMissing) {
      fail('contact.form.errorRequired', firstMissing);
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      fail('contact.form.errorEmail', 'email');
      return;
    }
    if (!consent) {
      fail('contact.form.errorConsent', 'consent');
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
                  {...invalidProps('firstName')}
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
                  {...invalidProps('lastName')}
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
                {...invalidProps('email')}
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
                  {...invalidProps('message')}
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                />
                <div className="message-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M11 1L1 11M11 6L6 11" stroke="currentColor" strokeLinecap="round" />
                  </svg>
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
                id="contact-consent"
                className="checkbox-input"
                checked={consent}
                {...invalidProps('consent')}
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
            <div className="form-status" id="contact-form-status" role="status" aria-live="polite">
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
