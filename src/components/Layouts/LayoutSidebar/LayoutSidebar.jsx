import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import TranslationSelect from "../../Ui/TranslationSelect/TranslationSelect";
import { Content, Wrapper } from "./styled";

const LayoutSidebar = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <TranslationSelect />
        {children}
      </Content>
    </Wrapper>
  );
};

export default LayoutSidebar;
