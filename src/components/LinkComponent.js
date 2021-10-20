import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const LinkComponent = ({ link, color, children }) => {
  return (
    <Wrapper>
      <Link to={link} className="links">
        {children}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .links {
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-block;
    position: relative;
  }
  .links:after {
    background: none repeat scroll 0 0 transparent;
    bottom: -2px;
    content: "";
    display: block;
    height: 0.5px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
    width: 0;
  }
  .links:hover:after {
    width: 100%;
    left: 0;
  }
  text-align: center;
  padding: 0 20px;
`;
export default LinkComponent;
