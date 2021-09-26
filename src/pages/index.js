import React from "react";
import "../css/main.css";

import { Link } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Blog from "../components/Blog";
import Discover from "../components/Discover";
import ShowBlog from "../components/ShowBlog";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Blog></Blog>
      <Discover></Discover>
      <ShowBlog></ShowBlog>
      <Footer></Footer>
    </Layout>
  );
};

export default IndexPage;
