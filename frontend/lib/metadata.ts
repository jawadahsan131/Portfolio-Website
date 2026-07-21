import type { Metadata } from "next";
import { siteUrl } from "@/lib/utils";

interface MetadataInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function pageMetadata({ title, description, path = "/", image = "/og.png" }: MetadataInput): Metadata {
  const url = siteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "AI Engineering Portfolio",
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}
