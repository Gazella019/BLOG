import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Title from "../components/Title";
import { StaticImage } from "gatsby-plugin-image";

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="about-me">
          <Title text="About Me" />
        </div>
        <div className="experience">
          <Title text="Experience" />
        </div>
        <div className="education">
          <Title text="Education" />
        </div>
        <Title text="Skills" />
        <div className="skills">
          <div className="card">
            <h1>Embedded System</h1>
            <p className="description">
              System platform bring up, integrate different mcu chips to our
              platform. Tech stack: SPI UART USB
            </p>
            <ul className="skill-list">
              <StaticImage
                src="../assets/icons/react.png"
                layout="constrained"
                alt="about img"
                placeholder="none"
                objectFit="cover"
                width={50}
                className="about-img"
              />
              <li>C</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="card">
            <h1>Python</h1>
            <p className="description">
              Use deep learning to solve image processing problem, mainly focus
              on image segmentation and image deblurring
            </p>
            <ul className="skill-list">
              <li>Python</li>
              <li>Pytorch</li>
            </ul>
          </div>
          <div className="card">
            <h1>Web Design</h1>
            <p className="description">Experiece with React.js</p>
            <ul className="skill-list">
              <li>Python</li>
              <li>Pytorch</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default about;

const Wrapper = styled.section`
  padding: 100px;

  /* .about-hero {
    height: 30vh;
  } */

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aquamarine; */
  }
  .card {
    flex: 1 1 20rem;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    /* background-color: aqua; */
    h1 {
      padding: 5px;
    }
    p {
      padding: 2px;
    }
  }
`;
