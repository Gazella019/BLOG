import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSlider = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <div>
      {current === 0 && (
        <StaticImage
          src="../assets/hero-img-1.jpg"
          layout="constrained"
          alt="hero image"
          placeholder="tracedSVG"
          className="hero-section"
          imgClassName="hero-0"
        />
      )}
      {current === 1 && (
        <StaticImage
          src="../assets/hero-img-2.jpg"
          layout="constrained"
          alt="hero image"
          placeholder="tracedSVG"
          className="hero-section"
          imgClassName="hero-1"
        />
      )}
      <button onClick={() => setCurrent(current + 1)}>Click</button>
      {console.log(current)}
    </div>
  );
};

export default HeroSlider;
