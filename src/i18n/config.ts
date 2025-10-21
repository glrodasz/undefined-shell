export const LOCALES = ["en", "es"] as const;
export const DEFAULT_LOCALE = "en" as const;

export type Locale = typeof LOCALES[number];

export const LANGUAGE_CONFIG = {
  en: { name: "English", flag: "🇺🇸" },
  es: { name: "Español", flag: "🇪🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
  pt: { name: "Português", flag: "🇵🇹" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  it: { name: "Italiano", flag: "🇮🇹" },
} as const;

export type LanguageConfig = typeof LANGUAGE_CONFIG;

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

export function getValidLocale(locale: string | undefined): Locale {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  return DEFAULT_LOCALE;
}

export function getLocaleFromAstro(astro: {
  currentLocale?: string;
  preferredLocale?: string;
  props?: { locale?: string };
}): Locale {
  const locale = astro.currentLocale || astro.preferredLocale || astro.props?.locale;
  return getValidLocale(locale);
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const segments = currentPath.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  let cleanPath: string;
  if (isValidLocale(firstSegment)) {
    const remainingSegments = segments.slice(1);
    cleanPath = remainingSegments.length > 0 ? '/' + remainingSegments.join('/') : '/';
  } else {
    cleanPath = currentPath;
  }
  
  if (cleanPath.includes('/posts/')) {
    return targetLocale === DEFAULT_LOCALE ? '/' : `/${targetLocale}/`;
  }
  
  return targetLocale === DEFAULT_LOCALE ? cleanPath : `/${targetLocale}${cleanPath}`;
}
