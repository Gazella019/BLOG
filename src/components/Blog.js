import React from "react";
import Title from "./Title";
import MediumCard from "./BlogCards/MediumCard";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(limit: 3, sort: { fields: frontmatter___date, order: ASC }) {
        nodes {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            slug
            date(formatString: "MMMM Do, YYYY")
            description
          }
          id
          excerpt
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  // const {
  //   allMdx: { nodes: posts },
  // } = data;
  // console.log(posts);
  return (
    <div className="blog-section">
      <div className="blog-container">
        <Title text="BLOG"></Title>
        <div className="card-section">
          {posts.map((post) => {
            return (
              <MediumCard
                key={post.id}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                description={post.description}
                slug={post.frontmatter.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Wrapper = styled.div``;
export default Blog;
