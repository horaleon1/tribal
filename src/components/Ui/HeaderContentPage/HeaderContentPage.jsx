import React from "react";
import {
  ButtonIcon,
  ButtonWrapper,
  LeftWrapper,
  RightWrapper,
  Title,
  Wrapper,
} from "./styled";
import Button from "../Button/Button";
import Squares from "../../SVG/Squares";
import { theme } from "../../../config/colors";

const HeaderContentPage = ({ title = "", hasIcon = false, buttonName = "" }) => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>{title}</Title>
      </LeftWrapper>
      <RightWrapper>
        {hasIcon && (
          <ButtonIcon onClick={() => false}>
            <Squares color={theme.black} width="24" height="24" />
          </ButtonIcon>
        )}
        <ButtonWrapper>
          <Button name={buttonName} label="primary" />
        </ButtonWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

export default HeaderContentPage;
