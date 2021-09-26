import React from "react";
import LargeCard from "./BlogCards/LargeCard";
import Title from "./Title";

const ShowBlog = () => {
  return (
    <div className="showBlog-section">
      <Title text="ALL BLOGS"></Title>
      <LargeCard></LargeCard>
      <LargeCard></LargeCard>
      <LargeCard></LargeCard>
    </div>
  );
};

export default ShowBlog;
