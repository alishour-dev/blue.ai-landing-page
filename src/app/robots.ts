import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/products", "/solutions", "/industries"],
		},
		sitemap: "https://blue.ai/sitemap.xml",
		host: "https://blue.ai",
	}
}
