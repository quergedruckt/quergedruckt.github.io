// app/layout.tsx
import './globals.css'
import I18nProvider from '@/components/I18nProvider'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            <I18nProvider>
              {children}
            </I18nProvider>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
