// Central place for links and navigation. Edit here instead of inside the components.
// Visible text for each nav item lives in the locale files (nav.<id>).

// --- External / not-yet-decided destinations ------------------------------
// Leave a value empty ('') to hide or un-link the matching element.
export const SITE_LINKS = {
  // Page or viewer for the 3D model. While empty, the "3D Model" nav item is hidden.
  model3d: '',
  // Legal pages, for example '/privacy' or 'https://example.com/privacy'.
  // While empty, the footer and form texts are shown as plain text instead of links.
  // Placeholder pages live in app/impressum and app/privacy (texts in the locale files under legal.*).
  impressum: '/impressum',
  privacyPolicy: '/privacy',
  termsOfService: '',
};

// --- Navigation -----------------------------------------------------------
export type NavItem = { id: string; href: string };

// In-page links start with "/#" so they also work from the legal pages.
// Top navigation (hero and header). Items with an empty href are not rendered.
export const MAIN_NAV: NavItem[] = [
  { id: 'home', href: '/#home' },
  { id: 'about', href: '/#about-us' },
  { id: 'model3d', href: SITE_LINKS.model3d },
  { id: 'contact', href: '/#contact' },
];

// Footer navigation. "gallery" points to the projects section.
export const FOOTER_NAV: NavItem[] = [
  { id: 'home', href: '/#home' },
  { id: 'about', href: '/#about-us' },
  { id: 'services', href: '/#services' },
  { id: 'gallery', href: '/#projects' },
  { id: 'faqs', href: '/#faq' },
];

// Links in the footer's bottom row. Items with an empty href are shown as plain text.
export const LEGAL_LINKS: (NavItem & { labelKey: string })[] = [
  { id: 'impressum', labelKey: 'footer.impressum', href: SITE_LINKS.impressum },
  { id: 'privacy', labelKey: 'footer.privacy', href: SITE_LINKS.privacyPolicy },
  { id: 'terms', labelKey: 'footer.terms', href: SITE_LINKS.termsOfService },
];

// Props for an <a>: external links open in a new tab.
export const linkProps = (href: string) =>
  /^https?:\/\//.test(href)
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };
