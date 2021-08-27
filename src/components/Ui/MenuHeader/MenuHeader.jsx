import { useState } from "react";
import ArrowDown from "../../SVG/ArrowDown";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import Pill from "../Pill/Pill";
import { ButtonPill, Logo, PillWrapper, Wrapper } from "./styled";

const MenuHeader = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const toggleMenu = () => handleMenu((prevState) => !prevState);
  const transformProperty = isMenuOpen ? "rotate(270)" : "rotate(90)";
  return (
    <Wrapper>
      <Logo to="/" />
      <ButtonPill onClick={toggleMenu}>
        <PillWrapper>
          <Pill initials="HL" />
        </PillWrapper>
        <ArrowDown transform={transformProperty} />
      </ButtonPill>
      {isMenuOpen && <FloatingMenu />}
    </Wrapper>
  );
};

export default MenuHeader;
