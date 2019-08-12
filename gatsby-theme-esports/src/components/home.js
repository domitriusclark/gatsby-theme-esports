import React from "react";
import Layout from "./layout";
import Button from "./button";
import Form from "./form";

const Home = () => {
  return (
    <Layout>
      <Form />
      <Button small>Hello</Button>
      <Button medium>Hello</Button>
      <Button large>Hello</Button>
      <Button padding={"4rem"} fontSize={`4rem`}>
        Hello
      </Button>
    </Layout>
  );
};

export default Home;
