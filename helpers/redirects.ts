import fs from "node:fs";
import matter from "gray-matter";

export type Post = {
  redirect: boolean;
  slug: string;
};

const ES_POSTS_FOLDER = "src/content/posts/es";

const SPECIAL_CHARS_BLOG_POSTS_REDIRECTS: Redirect = {
  "/posts/tipos-de-lenguajes-de-programación": {
    destination: "/posts/es/tipos-de-lenguajes-de-programacion",
    status: 301,
  },
  "/posts/diseñando-un-algoritmo": {
    destination: "/posts/es/disenando-un-algoritmo",
    status: 301,
  },
}

export const getSpanishPostsToRedirect = async (): Promise<Post[]> => {
  const files = fs.readdirSync(ES_POSTS_FOLDER);

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const content = fs.readFileSync(`${ES_POSTS_FOLDER}/${file}`, "utf-8");
      const { data } = matter(content);

      return {
        redirect: data.redirect,
        slug,
      };
    })
    .filter((post) => post.redirect);
};

type Redirect = Record<
  string,
  {
    destination: string;
    status: 301;
  }
>;

export const getRedirects = async (): Promise<Redirect> => {
  const blogPosts = await getSpanishPostsToRedirect();

  const prefixedBlogPostsRedirects = blogPosts.reduce((redirects, post) => {
    redirects[`/${post.slug}`] = {
      destination: `/posts/es/${post.slug}`,
      status: 301,
    };

    return redirects;
  }, {} as Redirect);

  const totalRedirects = {
    ...prefixedBlogPostsRedirects,
    ...SPECIAL_CHARS_BLOG_POSTS_REDIRECTS,
  };

  return totalRedirects;
};
