import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const LargeCard = () => {
  return (
    <LargeCardWrapper>
      <div className="large-card">
        <div className="card-img">
          <StaticImage
            src="../assets/blog-3.jpg"
            layout="constrained"
            alt="blog image"
            placeholder="blurred"
            className="card-img"
            objectFit="cover"
            // height={200}
          />
        </div>
        <div className="card-content">
          <p className="metadata">APRIL 15, 2020</p>
          <h1>Lago di Braies</h1>
          <p>
            Often ignored in the mad dash to the Costa Smeralda, Olbia has more
            to offer than first meets the eye. Look beyond its industrial
            outskirts.
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </LargeCardWrapper>
  );
};

const LargeCardWrapper = styled.section`
  /* background-color: cadetblue; */
  /* padding: 5px 5px; */
  .large-card {
    display: flex;
    flex-direction: row;
    background: #eedfcc;
    box-shadow: 0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 50px;
  }
  .card-img {
    flex: 1 1 10rem;
  }
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1 1 10rem;
    padding: 30px;
    .metadata {
      padding: 5px 0;
    }
    p {
      padding: 10px 0;
    }
    h1 {
      padding: 5px 0;
    }
    button {
      margin-top: 20px;
      background: #eedfcc;
      border: 1px solid black;
      width: 35%;
      padding: 15px 5px;
      cursor: pointer;
      &:hover {
        background: #d8cab7;
        transition: 0.5s ease-in-out;
      }
    }
  }
  width: 80%;
  margin: 0 auto;
  font-size: 0.6rem;
`;
export default LargeCard;
