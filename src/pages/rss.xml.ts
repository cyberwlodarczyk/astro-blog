import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET({ site }) {
  const posts = await getCollection("posts");

  return rss({
    title: "Astro Blog",
    description: "My journey learning Astro",
    site,
    items: posts.map(({ slug, data: { title, description, pubDate } }) => ({
      title,
      description,
      pubDate,
      link: `/posts/${slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
