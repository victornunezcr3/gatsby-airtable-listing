require("dotenv").config()

module.exports = {
  siteMetadata: {
    links: {
      contact: "mailto:victornunezcr@outlook.com",
      facebook: "https://www.facebook.com/ingvictorml/",
      linkedin: "https://www.linkedin.com/in/ingvictormlnunezcr",
      twitter: "https://twitter.com/IngvictorManue4",
    },
    locale: "en",
    title: "Comercio - Servicios",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        // See http://reactcommunity.org/react-modal/#usage
        modalProps: {
          style: {
            overlay: {
              backgroundColor: `rgba(0, 0, 0, 0.5)`,
            },
            content: {
              position: `absolute`,
              border: `none`,
              background: `none`,
              padding: 0,
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: process.env.AIRTABLE_TABLE_NAME,
            mapping: { image: "fileNode" },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travel Destinations`,
        short_name: `Travel Destinations`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#4299e1`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
