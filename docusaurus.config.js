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
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'research',
        blogTitle: "Research",
        routeBasePath: '/research',
        path: './research',
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
          blogTitle: "Writings",
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
          {to: 'research', label: 'Research', position: 'left'},
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
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Flashbots © ${new Date().getFullYear()}`,
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
