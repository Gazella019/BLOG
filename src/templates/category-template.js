import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import ExampleCard from "../components/BlogCards/ExampleCard";

const CategoryTemplate = ({ data }) => {
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

export default CategoryTemplate;

export const query = graphql`
  query GetCategories($category: String) {
    allMdx(filter: { frontmatter: { category: { eq: $category } } }) {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          category
          date
        }
        body
      }
    }
  }
`;

const Wrapper = styled.section`
  padding: 100px;
`;
