import React from "react";
import Title from "./Title";
import MediumCard from "./BlogCards/MediumCard";
import { graphql, useStaticQuery } from "gatsby";

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
          {/* refactor */}
          {posts.map((post) => {
            return (
              <MediumCard
                key={post.id}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                excerpt={post.excerpt}
                slug={post.frontmatter.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
