exports.createPages = ({ actions }, themeOptions) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/landing.js"),
    context: {
      navLinks: themeOptions.navLinks
    }
  });

  actions.createPage({
    path: "/about",
    component: require.resolve("./src/templates/about.js"),
    context: {
      navLinks: themeOptions.navLinks
    }
  });
};
