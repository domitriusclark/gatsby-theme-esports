module.exports = options => {
  return {
    plugins: [
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: `${options.root}/data`
        }
      },
      {
        resolve: "gatsby-transformer-yaml",
        options: {
          typeName: "Data"
        }
      },
      "gatsby-plugin-transition-link"
    ]
  };
};
