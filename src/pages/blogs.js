import React from "react";
import Layout from "../components/Layout";
import ExampleCard from "../components/BlogCards/ExampleCard";
import { graphql } from "gatsby";
import styled from "styled-components";

const blogs = ({ data }) => {
  const {
    allMdx: { nodes: blogs },
  } = data;

  return (
    <Layout>
      <Wrapper>
        {blogs.map((blog) => {
          return <ExampleCard key={blog.id} blog={blog} />;
        })}
      </Wrapper>
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
          date(formatString: "MMMM Do, YYYY")
          slug
        }
        id
      }
    }
  }
`;

const Wrapper = styled.section`
  padding: 100px;
`;
export default blogs;
