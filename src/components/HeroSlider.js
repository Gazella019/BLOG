import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import heroImg1 from "../assets/hero-img-2.jpg";
import heroImg2 from "../assets/hero-img-2.jpg";
import heroImg3 from "../assets/hero-img-3.jpg";

const HeroSlider = () => {
  const [current, setCurrent] = React.useState(1);
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
    <div className="hero-section">
      {current === 0 && (
        <div className="hero-card">
          <div className="hero-img-1" />
          <div className="hero-description">
            <div className="title">
              Germany
              {/* <div className="divider"></div> */}
            </div>
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
        <div className="hero-card">
          <div className="hero-img-2" />
          <div className="hero-description">
            <div className="title">
              Island
              {/* <div className="divider"></div> */}
            </div>
            <p>
              A road trip from Nevada to Arizona and California. The path of the
              righteous man is beset on all sides by the iniquities of the
              selfish and the tyranny of evil men
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
      {current === 2 && (
        <div className="hero-card">
          <div className="hero-img-3" />
          <div className="hero-description">
            <div className="title">
              French
              {/* <div className="divider"></div> */}
            </div>
            <p>
              Fuga temporibus provident molestias culpa nostrum error cum
              ratione mollitia vero illum laudantium eos debitis quisquam
              recusandae,
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
    </div>
  );
};

export default HeroSlider;
