import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  // Default RSS feed shows English posts
  const posts = await getCollection("posts", ({ slug }) => {
    return slug.startsWith("en/");
  });
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug.replace("en/", "")}/`,
    })),
  });
}
