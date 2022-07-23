// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["fr"],
		defaultLocale: "fr",
	},
	images: {
		domains: ["firebasestorage.googleapis.com"],
	},
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
};

module.exports = nextConfig;
