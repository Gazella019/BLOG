import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const LargeCard = ({ title, image, excerpt, slug, description, date }) => {
  return (
    <LargeCardWrapper>
      <Link to={`/posts/${slug}`}>
        <div className="large-card">
          <div className="card-img">
            <GatsbyImage image={getImage(image)} />
          </div>
          <div className="card-content">
            <p className="metadata">{date}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <button>READ MORE</button>
          </div>
        </div>
      </Link>
    </LargeCardWrapper>
  );
};

const LargeCardWrapper = styled.section`
  /* background-color: cadetblue; */
  /* padding: 5px 5px; */
  .large-card {
    display: flex;
    flex-direction: row;
    background: #f3efe9;
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
