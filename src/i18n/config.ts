export const LOCALES = ["en", "es"] as const;
export const DEFAULT_LOCALE = "en" as const;

export type Locale = typeof LOCALES[number];

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getLocaleFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const potentialLocale = segments[0];
  
  if (isValidLocale(potentialLocale)) {
    return potentialLocale;
  }
  
  return DEFAULT_LOCALE;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) {
    return path;
  }
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `/${locale}/${cleanPath}`;
}
