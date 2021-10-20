import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import LinkComponent from "./LinkComponent";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer footer-left">
        <LinkComponent link="/">Home</LinkComponent>
        <LinkComponent link="/about">About</LinkComponent>
        <LinkComponent link="/blog">Blog</LinkComponent>
      </div>
      <div className="footer footer-mid"></div>
      <div className="footer footer-right">
        <h2>Contact</h2>
        <a href="https://www.instagram.com/johnnny_211/">Instagram</a>

        <a href="https://www.facebook.com/gazella019/">Facebook</a>

        <a href="https://www.linkedin.com/in/%E5%AE%B6%E8%AA%A0-%E8%A8%B1-5549ab137/">
          LinkedIn
        </a>
      </div>
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
  background-color: #daf1ff;
  height: 50vh;

  .footer-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    padding: 10px;
  }
`;
export default Footer;
