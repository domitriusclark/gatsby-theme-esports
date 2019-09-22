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
      "gatsby-plugin-transition-link",
      {
        resolve: "gatsby-source-graphql",
        options: {
          typeName: "TS",
          fieldName: "takeshape",
          url: `https://api.takeshape.io/project/4a6cdc3e-415a-44dd-a418-20a608103ae2/graphql`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 2471f77d7b884cd5bc00bc13831ec3e3`
          },
          fetchOptions: {}
        }
      }
    ]
  };
};
