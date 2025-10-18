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

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  // Remove current locale prefix if it exists
  const segments = currentPath.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  let cleanPath: string;
  if (isValidLocale(firstSegment)) {
    // Remove the locale prefix
    const remainingSegments = segments.slice(1);
    cleanPath = remainingSegments.length > 0 ? '/' + remainingSegments.join('/') : '/';
  } else {
    // No locale prefix, use the path as is
    cleanPath = currentPath;
  }
  
  // If we're on a blog post (contains 'posts'), redirect to home
  if (cleanPath.includes('/posts/')) {
    return getLocalizedPath('/', targetLocale);
  }
  
  // Apply the target locale
  return getLocalizedPath(cleanPath, targetLocale);
}
