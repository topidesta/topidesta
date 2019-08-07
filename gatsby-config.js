module.exports = {
 siteMetadata: {
    title: `Topidesta`,
    description: `Hanya Menjadi Penulis dan Developer di Indonesia yang Kita Tahu`,
    author: `@emang_dasar`,
    fullName: `Horror The Code (HTC)`,
    twitterHandle: `https://twitter.com/emang_dasar`,
    baseOn: `https://github.com/gatsbyjs/gatsby-starter-blog`,
    wordpressOld: `https://topidesta.wordpress.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "posts",
      }
    }
  ],
}
