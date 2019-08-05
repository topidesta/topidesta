module.exports = {
  siteMetadata: {
    title: `Topidesta`,
    description: `Hanya Menjadi Penulis dan Developer di Indonesia yang Kita Tahu`,
    author: `@flexdinesh`,
    fullName: `Horror The Code (HTC), WhatsApp Group`,
    twitterHandle: `https://twitter.com/emang_dasar`,
    baseOn: `https://github.com/flexdinesh/gatsby-boilerplate`,
    wordpressOld: `https://topidesta.wordpress.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // markdown to pages for blog
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    // loading static data through GraphQL query
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // favicon generator
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `favicon`,
        short_name: `favicon`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/moustache.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    /*
    // google-analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'your-tracking-code',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },*/
  ],
}
