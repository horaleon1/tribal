import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { Content, Wrapper } from "./styled";

const LayoutSidebar = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default LayoutSidebar;
