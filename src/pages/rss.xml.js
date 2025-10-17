import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getPostsByLanguage, getPostUrl } from "../utils/content";
import { DEFAULT_LOCALE } from "../i18n/config";

export async function GET(context) {
  // Default RSS feed shows English posts
  const posts = await getPostsByLanguage(DEFAULT_LOCALE);
  
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: getPostUrl(post.slug, DEFAULT_LOCALE),
    })),
  });
}
