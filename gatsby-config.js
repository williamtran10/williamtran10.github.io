module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Spectral`,
            file: `https://fonts.googleapis.com/css2?family=Spectral`,
          },
        ],
      },
    },
  ],
  siteMetadata: {
    title: `William Tran`,
    description: `William Tran Personal Website`,
    twitterUsername: `@gatsbyjs`,
    image: `/favicon.ico`,
    siteUrl: `https://www.williamtran.net`,
  },
};
