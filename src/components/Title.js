import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <Wrapper>
      <h1>{props.text}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-size: 3rem;
    cursor: pointer;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  h1:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 7px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.5s ease 0s, left 0.5s ease 0s;
    width: 0;
  }
  h1:hover:after {
    width: 100%;
    left: 0;
  }
  text-align: center;
  padding: 60px 0 30px 0;
`;
export default Title;
