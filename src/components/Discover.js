import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
const Discover = () => {
  return (
    <div className="discover-section">
      <Wrapper>
        <div className="discover-img-container">
          <StaticImage
            src="../assets/blog-3.jpg"
            layout="constrained"
            alt="blog image"
            placeholder="blurred"
            className="discover-img"
            objectFit="cover"
            height={300}
          />
        </div>

        <div className="discover-text">
          <h1>Personal</h1>
          <h1>Blog</h1>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  height: 100%;
  .discover-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 10rem;
    /* background-color: brown; */
  }
  .discover-text {
    /* background-color: burlywood; */
    width: 100%;
    flex: 1 1 10rem;
  }
`;
export default Discover;
