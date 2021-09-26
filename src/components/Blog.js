import React from "react";
import Title from "./Title";
import MediumCard from "./BlogCards/MediumCard";

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-container">
        <Title text="BLOG"></Title>
        <div className="card-section">
          <MediumCard></MediumCard>
          <MediumCard></MediumCard>
          <MediumCard></MediumCard>
        </div>
      </div>
    </div>
  );
};

export default Blog;
