import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const SliderCard = (props) => {
  return (
    <div>
      <StaticImage
        src={props.src}
        layout="constrained"
        alt="hero image1"
        placeholder="none"
        className="hero-section"
        imgClassName="hero-1"
        objectFit="cover"
      />
      <div>hello</div>
    </div>
  );
};

export default SliderCard;
