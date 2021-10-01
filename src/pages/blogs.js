import React from "react";
import Layout from "../components/Layout";
import ExampleCard from "../components/BlogCards/ExampleCard";
import { graphql } from "gatsby";

const blogs = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data;
  console.log(blogs);
  return (
    <Layout>
      {blogs.map((blog) => {
        return <ExampleCard key={blog.id} {...blog} />;
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          category
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          author
          date
          slug
        }
        id
      }
    }
  }
`;

export default blogs;
