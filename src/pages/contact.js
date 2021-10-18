import React from "react";
import ContactForm from "../components/codepenComponents/contactForm";
import styled from "styled-components";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  padding: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default contact;
