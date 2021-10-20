import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Title from "../components/Title";
import { StaticImage } from "gatsby-plugin-image";

// Import SVGs
import PythonSvg from "../assets/icons/python.svg";
import CssSvg from "../assets/icons/css3.svg";
import GatsbyjsSvg from "../assets/icons/gatsbyjs.svg";
import HtmlSvg from "../assets/icons/html.svg";
import JavascriptSvg from "../assets/icons/javascript.svg";
import PytorchSvg from "../assets/icons/pytorch.svg";
import ReactSvg from "../assets/icons/react.svg";
import NextjsSvg from "../assets/icons/nextjs.svg";
import CSvg from "../assets/icons/c.svg";
import CplusplusSvg from "../assets/icons/cplusplus.svg";

const about = () => {
  return (
    <Layout>
      <Wrapper>
        {/* About me section */}
        <div className="about-me">
          <div className="about-text">
            <h1>about.</h1>A junior software engineer located in Taipei, My
            recent hobby is photography. This is a place to share my daily blog
            and photo works.
          </div>
          <div className="about-image">
            <StaticImage
              src="../assets/about-img.jpg"
              width={500}
              objectFit="cover"
              placeholder="tracedSVG"
              objectFit="cover"
              alt="about image"
            />
          </div>
        </div>
        {/* Experience section */}
        <div className="experience">
          <Title text="Experience" />
          <div className="experience-list">
            <ul>
              <li className="card">
                <div className="card-image">
                  <StaticImage
                    src="../assets/amazon-logo.png"
                    width={160}
                    objectFit="cover"
                    placeholder="tracedSVG"
                    alt="amazon"
                  />
                </div>
                <div className="card-text">
                  <h2>Amazon & Ring</h2>
                  <p>Dec 2020 - Present</p>
                  <p>Software Engineer</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Education secion */}
        <section className="education">
          <Title text="Education" />
          <div className="education-list">
            <ul>
              <li className="card">
                <div className="card-image">
                  <StaticImage
                    src="../assets/nthu.png"
                    width={160}
                    objectFit="cover"
                    placeholder="tracedSVG"
                    alt="NTHU"
                  />
                </div>
                <div className="card-text">
                  <h2>國立清華大學</h2>
                  <h2>National Tsing Hua University</h2>
                  <p>Sep 2018 – July 2020</p>
                  <p>Master in Computer Science</p>
                </div>
              </li>
              <li className="card">
                <div className="card-image">
                  <StaticImage
                    src="../assets/ccu.png"
                    width={160}
                    objectFit="cover"
                    placeholder="tracedSVG"
                    alt="CCU"
                  />
                </div>
                <div className="card-text">
                  <h2>國立中正大學</h2>
                  <h2>National Chung Cheng University</h2>
                  <p>Sep 2014 – June 2018</p>
                  <p>Bachelor in Communication Engineering</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Skill section */}
        <Title text="Skills" />
        <section className="skill">
          <div className="card">
            <h1>Embedded System</h1>
            <p className="description">
              Embedded system platform bring up, integrate different ARM cortex
              mcu chips to IOT platform.
            </p>
            <p className="description">
              Knowledge of bus protocols and implementaion such as UART, SPI.
            </p>
            <ul>
              <li className="skills">
                <img src={CSvg} className="skills-icon" />
                <div className="skills-text">C</div>
              </li>
              <li className="skills">
                <img src={CplusplusSvg} className="skills-icon" />
                <div className="skills-text">C++</div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h1>Python</h1>
            <p className="description">
              Use deep learning to solve image processing problem, mainly focus
              on image segmentation and image deblurring
            </p>
            <ul>
              <li className="skills">
                <img src={PythonSvg} className="skills-icon" />
                <div className="skills-text">Python</div>
              </li>
              <li className="skills">
                <img src={PytorchSvg} className="skills-icon" />
                <div className="skills-text">Pytorch</div>
              </li>
            </ul>
          </div>
          <div className="card">
            <h1>Web Design</h1>
            <p className="description">
              Familiar with HTML / CSS/ JavaScript (ES6+), use react and react
              frameworks to build modern website.
            </p>
            <ul className="skill-list">
              <div>
                <li className="skills">
                  <img src={HtmlSvg} className="skills-icon" />
                  <div className="skills-text">HTML</div>
                </li>

                <li className="skills">
                  <img src={CssSvg} className="skills-icon" />
                  <div className="skills-text">CSS</div>
                </li>

                <li className="skills">
                  <img src={JavascriptSvg} className="skills-icon" />
                  <div className="skills-text">Javascript</div>
                </li>
              </div>
              <div>
                <li className="skills">
                  <img src={ReactSvg} className="skills-icon" />
                  <div className="skills-text">React</div>
                </li>
                <li className="skills">
                  <img src={NextjsSvg} className="skills-icon" />
                  <div className="skills-text">Next js</div>
                </li>
                <li className="skills">
                  <img src={GatsbyjsSvg} className="skills-icon" />
                  <div className="skills-text">Gatsby js</div>
                </li>
              </div>
            </ul>
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .about-me {
    width: 60%;
    margin: 0 auto;
    padding: 150px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .about-image {
      padding: 50px;
      flex-grow: 2;
      border-radius: 10px;
    }
    .about-text {
      pad: 50px;
      flex-grow: 1;
      width: 800px;
      line-height: 2.5;
    }
  }
  .skill {
    width: 60%;
    margin: 0 auto;
    margin-bottom: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aquamarine; */
    .card {
      flex: 1 1 20rem;
      height: 400px;
      margin: 10px;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
      /* background-color: aqua; */
      h1 {
        padding: 20px 0;
      }
      p {
        padding: 10px 0;
      }
    }
    .skills {
      margin: 10px;
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 5px;

      .skills-icon {
        width: 30px;
        height: 30px;
      }

      .skills-text {
        padding: 3px;
      }

      &:hover {
        box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
        transition: 0.5s;
      }
    }
  }

  .experience {
    .card {
      /* background-color: burlywood; */
      padding: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 80px 0;
      .card-text {
        width: 400px;

        /* background-color: cadetblue; */
      }
    }
  }

  .education {
    background-color: #e3f1f0;
    padding-bottom: 120px;
    .card {
      /* background-color: burlywood; */
      padding: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 80px 0;
      .card-text {
        width: 400px;
      }
      .card-image {
        background-color: #e3f1f0;
      }
    }
  }
  .skill-list {
    display: flex;
    /* justify-content: center;
    align-items: center; */
  }

  .education-list {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .experience-list {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;

export default about;
