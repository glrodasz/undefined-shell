import { getCollection } from "astro:content";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "../i18n/config";

export function getLanguageFromSlug(slug: string): Locale {
  const match = slug.match(new RegExp(`^(${LOCALES.join('|')})/`));
  return (match?.[1] as Locale) || DEFAULT_LOCALE;
}

export function getCleanSlug(slug: string): string {
  // Remove language prefix for URL generation
  const pattern = new RegExp(`^(${LOCALES.join('|')})/`);
  return slug.replace(pattern, '');
}

export async function getPostsByLanguage(language: Locale) {
  return await getCollection("posts", ({ slug }) => {
    return getLanguageFromSlug(slug) === language;
  });
}

export function getPostUrl(slug: string, locale: Locale): string {
  const cleanSlug = getCleanSlug(slug);
  
  if (locale === DEFAULT_LOCALE) {
    return `/posts/${cleanSlug}/`;
  }
  
  return `/${locale}/posts/${cleanSlug}/`;
}
