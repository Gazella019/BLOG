import React from "react";
import HeroSlider from "./HeroSlider";
import { StaticImage } from "gatsby-plugin-image";
// import { useStaticQuery, graphql } from 'gatsby'

const Hero = ({ data }) => {
  return (
    <section>
      <HeroSlider></HeroSlider>
    </section>
  );
};

export default Hero;
