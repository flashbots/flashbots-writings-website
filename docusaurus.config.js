require("dotenv").config()
const math = require("remark-math")
const katex = require("rehype-katex")
const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "Flashbots",
  tagline: "Research respository of Flashbots",
  baseUrl: process.env.BASE_URL,
  url: process.env.TARGET_URL,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "flashbots", // Usually your GitHub org/user name.
  projectName: "writings-website", // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous"
    }
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'transparency',
        routeBasePath: '/transparency',
        path: './transparency',
        postsPerPage: "ALL",
        feedOptions: {
          type: "all"
          // copyright: `Copyright © ${new Date().getFullYear()} Flashbots, .`,          
        },
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          path: "./writings",
          routeBasePath: "/writings",
          postsPerPage: "ALL",
          feedOptions: {
            type: "all"
            // copyright: `Copyright © ${new Date().getFullYear()} Flashbots, .`,          
          },
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/scss/custom.scss")
        }
      })
    ]
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: "Flashbots",
        logo: {
          alt: "Flashbots",
          src: "img/logo.png",
          target: "_self"
        },
        items: [
          {to: 'about', label: 'About', position: 'left'},
          {to: 'writings', label: 'Writings', position: 'left'},
          {to: 'transparency', label: 'Transparency', position: 'left'},
          // {          
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: "https://github.com/flashbots/writings-website",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      // algolia: {
      //   apiKey: '',
      //   indexName: 'flashbots',
      //   // Optional: see doc section below
      //   appId: '',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["solidity"]
      }
    })
})
