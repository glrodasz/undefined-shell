import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../../consts";
import { getPostsByLanguage, getPostUrl } from "../../utils/content";

export async function GET(context) {
  // Spanish RSS feed
  const posts = await getPostsByLanguage("es");
  
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: getPostUrl(post.slug, "es"),
    })),
  });
}
