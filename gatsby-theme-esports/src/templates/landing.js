import React from "react";
import LayoutTemplate from "./layout";
import Header from "../components/header";
import styled from "styled-components";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import useWindowDimensions from "../hooks/useWindowDimensions";

const StyledHome = styled(animated.div)`
  background: white;
`;

const Home = props => {
  const { height, width } = useWindowDimensions();
  const animatedProps = useSpring({
    from: { width: 0, opacity: 0 },
    to: { width: width, opacity: 1 },
    config: { duration: 500 },
    onRest: () => {
      console.log();
      props.location.pathName === "/about" &&
        useSpring({
          from: { width: 0, opacity: 1 },
          to: { width: width, opacity: 0 },
          config: { duration: 500 }
        });
    }
  });
  return (
    <LayoutTemplate>
      <StyledHome style={{ ...animatedProps, height: height }}>
        <Header>
          <ul>
            <li>
              <Link to="/about">This is a link</Link>
            </li>
            <li>This is a link</li>
            <li>This is a link</li>
          </ul>
        </Header>
      </StyledHome>
    </LayoutTemplate>
  );
};

export default Home;
