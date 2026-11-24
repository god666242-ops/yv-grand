import { site } from "../site";
export default function sitemap() {
  return [{ url: site.url + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
