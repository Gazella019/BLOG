import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      {/* <Sidebar /> */}
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;
export default Layout;
