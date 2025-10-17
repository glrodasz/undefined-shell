import rss from "@astrojs/rss";
import { generateRSSFeed } from "../../utils/content";

export async function GET(context) {
  const feedData = await generateRSSFeed("es", context);
  return rss(feedData);
}
