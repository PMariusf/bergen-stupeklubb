import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/bli-medlem", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/pamelding", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/nyheter", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/arrangementer", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/trenere", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/om-oss", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/kontakt", changeFrequency: "yearly" as const, priority: 0.6 },
  { path: "/sponsing", changeFrequency: "monthly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
