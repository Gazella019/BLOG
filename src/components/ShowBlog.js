import React from "react";
import LargeCard from "./BlogCards/LargeCard";
import Title from "./Title";
import { useStaticQuery } from "gatsby";

const ShowBlog = () => {
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
  return (
    <div className="showBlog-section">
      <Title text="ALL BLOGS"></Title>
      {posts.map((post) => {
        return (
          <LargeCard
            key={post.id}
            title={post.frontmatter.title}
            image={post.frontmatter.image}
            excerpt={post.excerpt}
            slug={post.frontmatter.slug}
          />
        );
      })}
    </div>
  );
};

export default ShowBlog;
