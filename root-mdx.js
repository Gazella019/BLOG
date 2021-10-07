import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import Blockquote from "./src/components/MdxComponents/Blockquote";

const components = {
  h2: ({ children, type }) => {
    if (type === "orange") {
      return (
        <Wrapper>
          <div className="orange">{children}</div>
        </Wrapper>
      );
    }
    return <Wrapper>{children}</Wrapper>;
  },
  blockquote: Blockquote,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};

const Wrapper = styled.div`
  .orange {
    background-color: #fbf2e9;
    border-radius: 2px;
  }
`;
