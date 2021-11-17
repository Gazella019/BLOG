import React from "react";
import { Link } from "gatsby";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import LinkComponent from "./LinkComponent";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-container">
        <div className="nav-item">
          <LinkComponent link="/" text="Home" />
          <LinkComponent link="/about" text="About" />
          <LinkComponent link="/contact" text="Contact" />
          {/* <LinkComponent link="/">Home</LinkComponent>
          <LinkComponent link="/about">About</LinkComponent>
          <LinkComponent link="/contact">Contact</LinkComponent> */}
        </div>

        <div className="nav-icon">
          <Link to="/" className="nav-links">
            PHOTOFEE
          </Link>
        </div>

        <div className="nav-item">
          <LinkComponent link="/blogs" text="Blog" />
          <LinkComponent link="/gallery" text="Gallery" />
          {/* <LinkComponent link="/gallery">Gallery</LinkComponent> */}
        </div>
        {/* <FaFacebook /> */}
        {/* <AiFillInstagram /> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Asul", sans-serif;
  background-color: #f5f5f4;
  /* font-family: "Allison", cursive; */
  width: 100%;
  .nav-container {
    min-height: 10vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    /* background-color: aquamarine; */
    flex-basis: 10rem;
  }

  .nav-links {
    padding: 0.8rem;
    text-decoration: none;
    color: black;
  }

  .nav-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
  }

  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    /* background-color: aqua; */
  }

  @media (max-width: 800px) {
    .nav-item {
      flex-basis: 1rem;
    }
  }
`;
export default Navbar;
