import { site } from "../site";

export default function sitemap() {
  return [
    { url: site.url + "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: site.url + "/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: site.url + "/privacy-policy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
