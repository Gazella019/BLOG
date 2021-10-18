import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Imgg from "../assets/ccu.png";
import Imggg from "../assets/blog-1.jpg";
import logo from "../assets/logo.svg";
import PytorchSvg from "../assets/icons/pytorch.svg";
import ReactSvg from "../assets/icons/react.svg";
// import HtmlSvg from "../assets/icons/html.svg";
// import JavascriptSvg from "../assets/icons/javascript.svg";

const test = () => {
  return (
    <Layout>
      Testing..
      {/* <img src={logo} alt="mdx logo" />
      <img src={PytorchSvg} />
      <img src={ReactSvg} /> */}
      {/* <img src={"../assets/icons/pytorch.svg"} /> */}
      {/* <PytorchSvg /> */}
      {/* <HtmlSvg /> */}
      {/* <JavascriptSvg /> */}
    </Layout>
  );
};

export default test;
