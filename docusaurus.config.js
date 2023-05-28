// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pragtical',
  tagline: 'The practical and pragmatic code editor',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pragtical.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'pragtical', // Usually your GitHub org/user name.
  projectName: 'pragtical.github.io', // Usually your repo name.

  // Disable trailing slash since GitHub adds it.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Project's social card
      image: 'img/pragtical-social-card.jpg',
      navbar: {
        title: 'Pragtical',
        logo: {
          alt: 'Pragtical Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/plugins',
            label: 'Plugins',
            position: 'left'
          },
          {to: '/download', label: 'Get', position: 'left'},
          {to: '/docs/category/about-pragtical', label: 'About', position: 'right'},
          {
            href: 'https://github.com/pragtical',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Setup',
                to: '/docs/category/set-up',
              },
              {
                label: 'User Guide',
                to: '/docs/category/user-guide',
              },
              {
                label: 'Developer Guide',
                to: '/docs/category/developer-guide',
              },
            ],
          },
          {
            title: 'Customization',
            items: [
              {
                label: 'Themes',
                href: 'https://github.com/pragtical/colors',
              },
              {
                label: 'Plugins',
                to: '/plugins',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Contributors', to: '/docs/about/contributors'},
              {label: 'Faq', to: '/docs/about/faq'},
              {
                label: 'GitHub',
                href: 'https://github.com/pragtical',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pragtical. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },

      imageZoom: {
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          background: 'transparent',
        },
      },
    }),

    plugins: [
      require.resolve('docusaurus-lunr-search'),
      require.resolve('plugin-image-zoom')
    ],
};

module.exports = config;
