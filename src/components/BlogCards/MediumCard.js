import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import styled from "styled-components";

const MediumCard = ({ title, image, excerpt, slug, description }) => {
  return (
    <Link to={`/posts/${slug}`} className="medium-card">
      <GatsbyImage
        image={getImage(image)}
        alt="random stuff"
        className="img"
        height={100}
      />
      <div className="text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default MediumCard;
