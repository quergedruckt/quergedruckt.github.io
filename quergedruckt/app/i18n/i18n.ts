"use client";

import { useCallback, useSyncExternalStore } from 'react';
import en from './locales/en.json';
import de from './locales/de.json';

export type Language = 'en' | 'de';

export const LANGUAGES: Language[] = ['en', 'de'];
export const DEFAULT_LANGUAGE: Language = 'en';

const STORAGE_KEY = 'quergedruckt-language';

const dictionaries: Record<Language, unknown> = { en, de };

const isLanguage = (value: unknown): value is Language =>
  value === 'en' || value === 'de';

// --- Language store -------------------------------------------------------
// A tiny external store, so every component re-renders when the language
// changes and no provider has to wrap the app. Server render and first client
// render use DEFAULT_LANGUAGE, then React switches to the stored/browser one.

let current: Language | null = null;
const listeners = new Set<() => void>();

const detectLanguage = (): Language => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    // localStorage can be unavailable (private mode, blocked cookies)
  }
  return window.navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en';
};

const getSnapshot = (): Language => {
  if (current === null) current = detectLanguage();
  return current;
};

const getServerSnapshot = (): Language => DEFAULT_LANGUAGE;

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const setLanguage = (language: Language) => {
  current = language;
  try {
    window.localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // ignore, the choice still applies for this visit
  }
  listeners.forEach((listener) => listener());
};

// --- Translation lookup ---------------------------------------------------

const lookup = (dictionary: unknown, key: string): string | undefined => {
  let node: unknown = dictionary;
  for (const part of key.split('.')) {
    if (node && typeof node === 'object' && part in node) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  return typeof node === 'string' ? node : undefined;
};

export const translate = (language: Language, key: string): string =>
  lookup(dictionaries[language], key) ??
  lookup(dictionaries[DEFAULT_LANGUAGE], key) ??
  key;

export const useTranslation = () => {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const t = useCallback((key: string) => translate(language, key), [language]);
  return { t, language, setLanguage };
};
