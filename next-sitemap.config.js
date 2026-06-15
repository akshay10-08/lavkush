/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lavkushvatika.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./public",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
