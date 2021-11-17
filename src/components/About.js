import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
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
          className="about-img"
          width={400}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  width: 100%;
  height: 80vh;
  background-color: rosybrown;
  .about-text-section h1 {
    padding: 30px;
  }
  .about-text-section {
    flex: 1 1 30rem;
    background-color: #faf7f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Cormorant Garamond", serif;
    font-weight: 100;
  }

  .about-img-section {
    flex: 1 1 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: azure;
  }

  .about-img {
    border-radius: 5px;
  }

  /* .about-img-section > div {
    position: absolute;
    z-index: 10;
  } */
  /* .about-img::after {
    content: "";
    position: absolute;
    height: 6rem;
    width: 100%;
    transform: translateX(50px%);
  } */
  @media (max-width: 500px) {
    .about-text-section h1 {
      font-size: 1rem;
    }
  }
`;
export default About;
