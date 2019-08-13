import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import styled from "styled-components";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import useWindowDimensions from "../hooks/useWindowDimensions";

const StyledAbout = styled(animated.div)`
  background: white;
`;

const About = props => {
  const { height, width } = useWindowDimensions();
  const { location } = props;
  console.log(location);
  const animatedProps =
    location.origin === "http://localhost:8000" &&
    useSpring({
      from: { width: 0, opacity: 0 },
      to: { width: width, opacity: 1 },
      config: { duration: 500 }
    });
  return (
    <Layout>
      <StyledAbout style={{ ...animatedProps, height: height }}>
        <Header>
          <ul>
            <li>
              <Link to="/">This is a link</Link>
            </li>
            <li>This is a link</li>
            <li>This is a link</li>
          </ul>
        </Header>
      </StyledAbout>
    </Layout>
  );
};

export default About;
