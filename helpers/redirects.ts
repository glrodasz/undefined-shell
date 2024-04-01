import fs from "node:fs";
import matter from "gray-matter";

export type Post = {
  redirect: boolean;
  slug: string;
};

export const getPostsToRedirect = async (): Promise<Post[]> => {
  const files = fs.readdirSync("src/content/posts");

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const content = fs.readFileSync(`src/content/posts/${file}`, "utf-8");
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
  const blogPosts = await getPostsToRedirect();

  return blogPosts.reduce((config, post) => {
    config[`/${post.slug}`] = {
      destination: `/posts/${post.slug}`,
      status: 301,
    };
    return config;
  }, {} as Redirect);
};
