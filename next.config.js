const withPWA = require("next-pwa");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPWA({
    i18n: {
      locales: ["fr", "en"],
      defaultLocale: "fr",
    },
    images: {
      domains: ["localhost", "api.nextjs-headless-cms.tech"],
    },
    pwa: {
      // disable: process.env.NODE_ENV === "development",
      disable: true,
      dest: "public",
      swSrc: "service-worker.js",
    },
  })
);
