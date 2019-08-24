exports.createPages = ({ actions }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/landing.js")
  });

  actions.createPage({
    path: "/about",
    component: require.resolve("./src/templates/about.js")
  });
};
