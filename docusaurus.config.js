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
  baseUrl: process.env.REACT_APP_BASE_URL,
  url: process.env.REACT_APP_TARGET_URL,
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
  themes: ['docusaurus-theme-frontmatter'],
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus2-dotenv',
      {
          path: "./.env", // The path to your environment variables.
          safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
          systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
          silent: false, //  If true, all warnings will be suppressed
          expand: false, // Allows your variables to be "expanded" for reusability within your .env file
          defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: "Writings",
          path: "./content",
          routeBasePath: "/",
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
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          // ignorePatterns: ['/tags/**'],
          // filename: 'sitemap.xml',
        },
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: 'Writings'},
        {name: 'twitter:description', content: 'A collection of articles and papers from Flashbots.'},
        {name: 'twitter:image', content: 'img/tw-card.jpg'}
      ],
      navbar: {
        title: "Flashbots",
        logo: {
          alt: "Flashbots",
          src: "img/logo.png",
          target: "_self"
        },
        items: [
          {href: "https://flashbots.net", label: 'About', position: 'left'},
          {href: "https://boost.flashbots.net/", label: 'MEV-Boost', position: 'left'},
          {href: "https://collective.flashbots.net/", label: 'Forum', position: 'left'},
          {href: "https://jobs.flashbots.net/", label: 'Join us', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          // {
          //  href: "https://github.com/flashbots/writings-website",
          //  label: "GitHub",
          //  position: "right"
          // }
        ]
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'x',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/flashbots',
              },
              {
                label: 'Documentation',
                href: 'https://docs.flashbots.net/',
              },
              {
                label: 'Status',
                href: 'https://status.flashbots.net/',
              },
            ],
          },
          {
            title: 'x',
            items: [
              {
                label: 'Calendar',
                href: 'https://calendar.flashbots.net/',
              },
              {
                label: 'Transparency reports',
                href: 'https://writings.flashbots.net/tags/transparency-report',
              },
            ],
          },
          {
            title: 'x',
            items: [
              {
                label: 'Discord',
                href: 'http://discord.gg/flashbots',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCclbTgsnYUy3vmrptIqCmqQ',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Flashbots, Ltd`,
      },
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
