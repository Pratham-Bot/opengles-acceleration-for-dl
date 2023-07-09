/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'OpenGLES Acceleration for Deep Learning',
  tagline: 'By Pratham Deshmukh',
  url: 'https://gsoc.beagleboard.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/darknet.png',
  organizationName: 'Pratham-Bot', // Usually your GitHub org/user name.
  projectName: '/opengles-acceleration-for-dl/', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GSoC 2023 @ BeagleBoard.org',
      logo: {
        alt: 'My GSoC project Logo',
        src: 'img/Google_Summer_of_Code_sun_logo_2022.svg.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documentations',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://git.beagleboard.org/gsoc',
          label: 'My GitLab',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentations',
          items: [
            {
              label: 'Week 0 - Community Bonding',
              to: 'docs/',
            },
            {
              label: 'Week 1 - Performance Benchmarking',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/21979548/pratham-d',
            },
            ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Pratham-Bot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Beagleboard Inc..`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
