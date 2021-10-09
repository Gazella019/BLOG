import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { category, date, slug, image, title, blogImages },
      body,
    },
  } = data;

  return (
    <Layout>
      <Wrapper>
        <h1>{title}</h1>
        <MDXRenderer blogImages={blogImages}>{body}</MDXRenderer>
        hello
      </Wrapper>
    </Layout>
  );
};
export const query = graphql`
  query GetBlogPost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date
        slug
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        blogImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
      }
      body
    }
  }
`;

const Wrapper = styled.div`
  padding: 100px;
`;
export default PostTemplate;
