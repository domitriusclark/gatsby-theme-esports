const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-esports-src-components-home-js": hot(preferDefault(require("/Users/domitrius/Desktop/gatsby-theme-esports/gatsby-theme-esports/src/components/home.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/domitrius/Desktop/gatsby-theme-esports/demo/.cache/dev-404-page.js")))
}

