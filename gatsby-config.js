module.exports = {
  siteMetadata: {
    title: "Renzo Mayer - Desarrollador Web, Fotógrafo & Filmmaker",
    description: "¿Estás trabajando en algo genial? ¡Me encantaría ayudarte! ¡Envíame un correo y comenzá tu proyecto ahora mismo!",
    locale: "es",
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
      id: "UA-174922659-1",
    },
  }
  ],
}
