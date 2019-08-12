import React from "react";
import Layout from "./layout";
import Header from "./header";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import useWindowDimensions from "../hooks/useWindowDimensions";

const StyledHome = styled(animated.div)`
  width: 100%;
  background: white;
`;

const Home = () => {
  const { height, width } = useWindowDimensions();
  const props = useSpring({
    from: { width: 0 },
    to: { width: width }
  });
  return (
    <Layout>
      <StyledHome
        style={{ ...props, transitionDuration: ".3s", height: height }}
      >
        <Header>
          <ul>
            <li>This is a link</li>
            <li>This is a link</li>
            <li>This is a link</li>
          </ul>
        </Header>
      </StyledHome>
    </Layout>
  );
};

export default Home;
