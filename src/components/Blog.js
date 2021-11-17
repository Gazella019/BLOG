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
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(250, 251, 252);
  .blog-container {
    padding: 0 0 170px 0;
  }
  .card-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    display: flex;
    width: 80%;
    /* color: #f3efe9; */
  }
  /* refactor */
  .medium-card {
    /* background-color: rgb(235, 235, 253); */
    /* border-radius: 10px; */
    flex: 1 1 20rem;
    margin: 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 0px 5px 5px #c2c2c2;
  }

  @media screen and (max-width: 500px) {
    .medium-card {
      margin: 20px;
    }
    .blog-container {
      padding: 0 0 50px 0;
    }
  }

  .medium-card:hover {
    transform: scale(1.02);
    transition: 1s;
  }

  .medium-card .img {
    flex: 1 1 10rem;
    /* border-radius: 10px 10px 0 0; */
    /* overflow: hidden; */
  }

  .medium-card .text {
    flex: 3 1 10rem;
    padding: 15px 20px;
  }

  .medium-card .text h1 {
    text-align: center;
    padding: 10px 0;
  }

  .medium-card .text p {
    text-align: center;
    padding: 15px;
  }
  /* discover section */

  .discover-section {
    width: 100%;
    height: 80vh;
  }
`;
export default Blog;
