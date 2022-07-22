import React from "react";
// @ts-ignore
import Div100vh from "react-div-100vh";
import styled from "styled-components";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Page>
    <Div100vh>{children}</Div100vh>
  </Page>
);

const Page = styled.div`
  height: 100%;
`;

export default Layout;
