import { useHistory } from "react-router";
import {
  ButtonIcon,
  ButtonUpdate,
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
import Update from "../../SVG/Update";
import { getBusinesses } from "../../../reducers/businesses";

const HeaderContentPage = ({
  title = "",
  hasIcon = false,
  buttonName = "",
  buttonAction = () => false,
}) => {
  // Redux state
  const hasSquareLayout = useSelector((state) => state).ui.hasSquaresLayout;
  const dispatch = useDispatch();
  // Router
  const history = useHistory();
  const location = history.location.pathname;
  const isHome = location === "/";
  return (
    <Wrapper>
      <LeftWrapper>
        <Title>{title}</Title>
      </LeftWrapper>
      <RightWrapper>
        <IconWrapper>
          {isHome && (
            <ButtonUpdate onClick={() => dispatch(getBusinesses())}>
              <Update />
            </ButtonUpdate>
          )}
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
