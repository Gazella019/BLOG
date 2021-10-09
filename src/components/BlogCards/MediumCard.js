import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import styled from "styled-components";

const MediumCard = ({ title, image, excerpt, slug }) => {
  return (
    <Link to={`/posts/${slug}`}>
      <div className="medium-card">
        <GatsbyImage
          image={getImage(image)}
          alt="random stuff"
          className="img"
        />
        <div className="text">
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default MediumCard;
