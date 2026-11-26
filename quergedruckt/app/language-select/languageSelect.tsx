"use client";

import { useEffect, useId, useRef, useState } from "react";
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
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
    buttonRef.current?.focus();
  };

  return (
    <div className="language-select" ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        className="language-select-button"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={`${t("language.label")}: ${t(`language.${language}`)}`}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="language-select-flag" aria-hidden="true">{FLAGS[language]}</span>
        <span className="language-select-code">{language.toUpperCase()}</span>
      </button>

      {open && (
        <ul className="language-select-menu" id={menuId}>
          {LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                lang={code}
                aria-current={code === language ? "true" : undefined}
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
