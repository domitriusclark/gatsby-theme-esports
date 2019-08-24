module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-esports",
      options: {
        navLinks: ["About", "Team"],
        colors: {
          background: "#000000",
          primaryColor: "#FFFFFF",
          secondaryColor: "#D21823"
        }
      }
    },
    "gatsby-plugin-transition-link"
  ]
};
