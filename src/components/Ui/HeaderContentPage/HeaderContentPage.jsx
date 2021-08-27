import React from "react";
import {
  ButtonIcon,
  ButtonWrapper,
  IconWrapper,
  LeftWrapper,
  RightWrapper,
  Title,
  Wrapper,
} from "./styled";
import Button from "../Button/Button";
import List from "../../SVG/List";
import Squares from "../../SVG/Squares";
import { theme } from "../../../config/colors";
import { useSelector, useDispatch } from "react-redux";
import { toggleLayout } from "../../../reducers/ui";

const HeaderContentPage = ({
  title = "",
  hasIcon = false,
  buttonName = "",
  buttonAction = () => false,
}) => {
  const hasSquareLayout = useSelector((state) => state).ui.hasSquaresLayout;
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <LeftWrapper>
        <Title>{title}</Title>
      </LeftWrapper>
      <RightWrapper>
        <IconWrapper>
          {hasIcon && (
            <ButtonIcon onClick={() => dispatch(toggleLayout())}>
              {hasSquareLayout && (
                <Squares color={theme.black} width="24" height="24" />
              )}
              {!hasSquareLayout && <List />}
            </ButtonIcon>
          )}
        </IconWrapper>
        <ButtonWrapper>
          <Button
            name={buttonName}
            label="primary"
            onClick={buttonAction}
            wdt="155px"
          />
        </ButtonWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

export default HeaderContentPage;
