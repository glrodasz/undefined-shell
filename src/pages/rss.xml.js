import rss from "@astrojs/rss";
import { generateRSSFeed } from "../utils/content";
import { DEFAULT_LOCALE } from "../i18n/config";

export async function GET(context) {
  const feedData = await generateRSSFeed(DEFAULT_LOCALE, context);
  return rss(feedData);
}
