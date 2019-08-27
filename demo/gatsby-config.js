module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-esports",
      options: {
        root: __dirname,
        navLinks: ["About", "Team"],
        colors: {
          background: "#000000",
          primaryColor: "#FFFFFF",
          secondaryColor: "#D21823"
        }
      }
    }
  ]
};
