import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import heroImg1 from "../assets/hero-img-1.jpg";
import heroImg2 from "../assets/hero-img-2.jpg";
import heroImg3 from "../assets/hero-img-3.jpg";

const HeroSlider = () => {
  const [current, setCurrent] = React.useState(0);
  const sliderNum = 3;

  const prevSlide = () => {
    if (current == 0) {
      setCurrent(sliderNum - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (current == sliderNum - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="hero">
      {current === 0 && (
        <div className="hero-card">
          {/* <StaticImage
            src="../assets/hero-img-1.jpg"
            layout="constrained"
            alt="hero image1"
            placeholder="none"
            className="hero-section"
            imgClassName="hero-img"
            objectFit="cover"
          /> */}
          <div className="hero-img" src={heroImg1} />
          <div className="hero-description">
            <h1 className="title">Germany</h1>
            <br />
            <br className="divider" />
            <p>
              The German National Tourist Board presents Germany as a travel
              destination. Varied culture, fascinating nature and cosmopolitan
              people await you. Visit us.
            </p>
          </div>
          <MdKeyboardArrowLeft
            className="hero-item-left"
            size="2rem"
            color="#F5F5F4"
            onClick={prevSlide}
          />
          <MdKeyboardArrowRight
            className="hero-item-right"
            size="2rem"
            color="#F5F5F4"
            onClick={nextSlide}
          />
        </div>
      )}
      {current === 1 && (
        <div>
          <StaticImage
            src="../assets/hero-img-2.jpg"
            layout="fullWidth"
            alt="hero image2"
            placeholder="none"
            className="hero-section"
            imgClassName="hero-1"
            objectFit="cover"
          />
          <div> Hellooo </div>
        </div>
      )}
      {current === 2 && (
        <div>
          <StaticImage
            src="../assets/hero-img-3.jpg"
            layout="fullWidth"
            alt="hero image3"
            placeholder="none"
            className="hero-section"
            imgClassName="hero-1"
            objectFit="cover"
          />
          <div> Hellooo </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
