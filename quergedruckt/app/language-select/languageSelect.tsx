"use client";

import { useEffect, useRef, useState } from "react";
import "./languageSelect.scss";
import { LANGUAGES, type Language, useTranslation } from "../i18n/i18n";

const FLAGS: Record<Language, string> = {
  en: "🇬🇧",
  de: "🇩🇪",
};

const LanguageSelect = () => {
  const { t, language, setLanguage } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const select = (code: Language) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <div className="language-select" ref={containerRef}>
      <button
        type="button"
        className="language-select-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("language.label")}: ${t(`language.${language}`)}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="language-select-flag" aria-hidden="true">{FLAGS[language]}</span>
        <span className="language-select-code">{language.toUpperCase()}</span>
      </button>

      {open && (
        <ul className="language-select-menu" role="listbox" aria-label={t("language.label")}>
          {LANGUAGES.map((code) => (
            <li key={code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={code === language}
                className={`language-select-option${code === language ? " selected" : ""}`}
                onClick={() => select(code)}
              >
                <span className="language-select-flag" aria-hidden="true">{FLAGS[code]}</span>
                <span>{t(`language.${code}`)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
