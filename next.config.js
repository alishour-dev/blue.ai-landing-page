/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	webpack: (config) => {
		config.plugins.push(
			require("unplugin-icons/webpack")({
				compiler: "jsx",
				jsx: "react",
			})
		)

		return config
	},

	async redirects() {
		return [
			{
				source: "/solutions",
				permanent: true,
				destination: "/solutions/customer-support-automation",
			},
			{
				source: "/products",
				permanent: true,
				destination: "/products/campaign-management-system",
			},
			{
				source: "/industries",
				permanent: true,
				destination: "/industries/ecommerce",
			},
		]
	},
}

if (process.env.ANALYZE) {
	const withBundleAnalyzer = require("@next/bundle-analyzer")({
		enabled: process.env.ANALYZE === "true",
		openAnalyzer: false,
	})
	module.exports = withBundleAnalyzer(nextConfig)
} else {
	module.exports = nextConfig
}
