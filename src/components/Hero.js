import React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { useStaticQuery, graphql } from 'gatsby'

const Hero = ({ data }) => {
  return (
    <section className="hero-section">
      <StaticImage
        calssName="hero-img"
        src="../assets/hero-img-1.jpg"
        layout="constrained"
      />
    </section>
  );
};

export default Hero;
