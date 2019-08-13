exports.createPages = ({ actions, location }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/landing.js"),
    context: {
      location
    }
  });

  actions.createPage({
    path: "/about",
    component: require.resolve("./src/templates/about.js"),
    context: {
      location
    }
  });
};
