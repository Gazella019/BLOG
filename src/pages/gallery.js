import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const gallery = () => {
  const size = 350;
  return (
    <Layout>
      <Wrapper>
        <section className="gallery-container">
          <div className="gallery-section">
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-1.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-2.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-3.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-4.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-5.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-6.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-7.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-8.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
                imgClassName="img"
              />
            </div>
            <div className="gallery-card">
              <StaticImage
                src="../assets/gallery/g-9.jpg"
                width={size}
                height={size}
                objectFit="cover"
                placeholder="tracedSVG"
                alt="gallery image"
              />
            </div>
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .hero-section {
    background-color: #84b4b1;
    color: #fff;
    text-align: center;
    padding: 30px 0 120px;
  }
  .gallery-container {
    width: 80%;
    margin: 100px auto;
  }
  .gallery-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .gallery-card {
    margin: 30px;
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }
  .gallery-card:hover {
    cursor: pointer;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transform: scale(1.02);
    /* -webkit-filter: grayscale(100%) blur(3px);
    filter: grayscale(100%) blur(3px); */
  }
`;

export default gallery;
