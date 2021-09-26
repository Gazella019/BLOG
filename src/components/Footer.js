import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer footer-left">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Blog</h2>
      </div>
      <div className="footer footer-mid">
        <h2>Contact</h2>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
      <div className="footer footer-right">
        <h2>Categories</h2>
        <h3>Architecture</h3>
        <h3>Book</h3>
        <h3>Chapters</h3>
        <h3>Lifestyle</h3>
        <h3>Travel</h3>
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
  background-color: #c4ddec;
  height: 50vh;
`;
export default Footer;
