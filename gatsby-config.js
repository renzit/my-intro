const config = require('./config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    locale: config.siteLocale,
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        showThemeLogo: false,
        theme: "classic",
      },
    },
  
  {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: config.googleTagManagerID,
    },
  }
  ],
}
