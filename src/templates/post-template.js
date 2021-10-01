import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { category, date, slug, image, title },
      body,
    },
  } = data;
  console.log(data);
  return (
    <Wrapper>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
      hello
    </Wrapper>
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
