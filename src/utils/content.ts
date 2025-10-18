import { getCollection } from "astro:content";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "../i18n/config";
import { getMessages } from "../i18n";

export function getLanguageFromSlug(slug: string): Locale {
  const match = slug.match(new RegExp(`^(${LOCALES.join('|')})/`));
  return (match?.[1] as Locale) || DEFAULT_LOCALE;
}

export function getCleanSlug(slug: string): string {
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

export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  const words = text.trim().split(/\s+/);
  const totalWords = words.length;

  const readingTimeMinutes = totalWords / wordsPerMinute;
  const roundedMinutes = Math.round(readingTimeMinutes);

  return roundedMinutes;
}

export async function generateRSSFeed(locale: Locale, context: any) {
  const posts = await getPostsByLanguage(locale);
  const messages = getMessages(locale);
  
  return {
    title: messages.site.title,
    description: messages.site.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: getPostUrl(post.slug, locale),
    })),
  };
}

export async function generateSlugPaths(locale: Locale) {
  const posts = await getPostsByLanguage(locale);
  
  return posts.map((post) => ({
    params: { slug: getCleanSlug(post.slug) },
    props: { post, locale }
  }));
}
