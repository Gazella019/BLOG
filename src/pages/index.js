import React from "react";
import "../css/main.css";

import { Link } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";

const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Blog></Blog>
    </Layout>
  );
};

export default IndexPage;
