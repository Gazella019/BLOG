import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text-section">
        <h1>Photographer</h1>
        <h1>Engineer</h1>
        <h1>Web Designer</h1>
      </div>
      <div className="about-img-section">
        <StaticImage
          src="../assets/about-img.jpg"
          layout="constrained"
          alt="about img"
          placeholder="none"
          objectFit="cover"
          width={300}
          className="about-img"
        />
        <div></div>
      </div>
    </div>
  );
};

export default About;
