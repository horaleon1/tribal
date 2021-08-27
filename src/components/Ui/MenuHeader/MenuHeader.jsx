import { useDispatch } from "react-redux";
import ArrowDown from "../../SVG/ArrowDown";
import Pill from "../Pill/Pill";
import { ButtonPill, IconWrapper, Logo, PillWrapper, Wrapper } from "./styled";
import { onToogleMobileMenu } from "../../../reducers/ui";

const MenuHeader = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Logo to="/" />
      <ButtonPill onClick={() => dispatch(onToogleMobileMenu())}>
        <PillWrapper>
          <Pill initials="HL" />
        </PillWrapper>
        <IconWrapper>
          <ArrowDown />
        </IconWrapper>
      </ButtonPill>
    </Wrapper>
  );
};

export default MenuHeader;
