module.exports = {
  siteMetadata: {
    title: `Meryem Barroug`,
    description: `Meryem Barroug is a front end developer that enjoy building web application`,
    author: `Meryem Barroug`,
    siteUrl: 'https://meryembarroug.netlify.app',
    image: `/og.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://meryembarroug.netlify.app`,
      },
    },
      
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {

        name: `data`,
        path: `./data`,
  
      },
    },
  
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meryem Barroug Portfolio`,
        short_name: `Meryem Barroug`,
        start_url: `/`,
        background_color: `#181818`,
        theme_color: `#181818`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
