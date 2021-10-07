import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="about-me">About me</div>
        <div className="experience">Experience</div>
        <div className="education">Education</div>
        <div className="skills">
          <div className="card">
            <h1>Front-End</h1>
            <p>Experiece with React.js</p>
          </div>
          <div className="card">
            <h1>Front-End</h1>
            <p>Experiece with React.js</p>
          </div>
          <div className="card">
            <h1>Front-End</h1>
            <p>Experiece with React.js</p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default about;

const Wrapper = styled.section`
  padding: 100px;

  .about-hero {
    height: 30vh;
  }

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: aquamarine;
  }
  .card {
    width: 100px;
    background-color: aqua;
  }
`;
