import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSync from "./i18n/LanguageSync";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // English defaults for the static HTML. LanguageSync swaps in the German text
  // (see meta.* in the locale files) when the visitor selects German.
  title: "quergedruckt | 3D Printing, Prototyping & Design",
  description: "Custom 3D printing, prototyping, and design services for innovators, makers, and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageSync />
        {children}
      </body>
    </html>
  );
}
