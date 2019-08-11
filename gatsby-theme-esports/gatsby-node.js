exports.createPages = ({ actions }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/components/home.js")
  });
  actions.createPage({
    path: "/",
    component: require.resolve("/src/components/about.js")
  });
};