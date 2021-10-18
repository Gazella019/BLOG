import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer footer-left">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/about" className="nav-links">
          About
        </Link>
        <Link to="/blog" className="nav-links">
          Blog
        </Link>
      </div>
      <div className="footer footer-mid">
        <h2>Contact</h2>
        <p>
          <a href="https://www.instagram.com/johnnny_211/">Instagram</a>
        </p>
        <p>
          <a href="https://www.facebook.com/gazella019/">Facebook</a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/%E5%AE%B6%E8%AA%A0-%E8%A8%B1-5549ab137/">
            LinkedIn
          </a>
        </p>
      </div>
      <div className="footer footer-right"></div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .footer {
    flex: 1 1 10rem;
    text-align: center;
  }
  background-color: #c4ddec;
  height: 50vh;
`;
export default Footer;
