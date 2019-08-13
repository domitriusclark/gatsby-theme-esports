import React from "react";
import Layout from "../components/layout";

const LayoutTemplate = ({ children, location }, props) => {
  console.log(children);
  const [path, setPath] = React.useState(location);

  // i need to be able to check was the most recent location url is  -- location.pathname
  // i need to know the last location -- location.origin

  return <Layout>{children}</Layout>;
};

export default LayoutTemplate;
