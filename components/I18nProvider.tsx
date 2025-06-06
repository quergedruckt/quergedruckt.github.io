'use client'

import { ReactNode, useEffect } from 'react'
import i18n from '@/lib/i18n'
import { I18nextProvider } from 'react-i18next'

const I18nProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    i18n.changeLanguage() // Trigger language detection
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default I18nProvider
