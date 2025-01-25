// @ts-check

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TruBudget",
  tagline: "TruBudget - a trusted public expenditure tool",
  url: "https://trubudget.net/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  onBrokenMarkdownLinks: "ignore",
  organizationName: "openkfw",
  projectName: "trubudget-website",
  plugins: ["docusaurus-lunr-search"],
  themeConfig: {
    navbar: {
      hideOnScroll: true, // Hide the default navbar on scroll
    },
    colorMode: {
      disableSwitch: true, // Disable the dark mode toggle button
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          docRootComponent: "@theme/DocRoot",
          docItemComponent: "@theme/DocItem",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
};

export default config;