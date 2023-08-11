import type { MetadataRoute } from "next"

import { PATHS } from "@/constants"

export default function sitemap(): MetadataRoute.Sitemap {
	const URL = process.env.BASE_URL || "https://blue.ai"

	const routes = Object.values(PATHS)

	return routes?.map((route) => ({
		url: URL + (route === "/" ? "" : route),
		lastModified: new Date(),
	}))
}
