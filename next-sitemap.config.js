/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.BASE_URL || "https://blue.ai",
	changefreq: "daily",
	priority: 0.7,
	generateRobotsTxt: true,
	exclude: ["/server-sitemap-index.xml"],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
	},
}
