import { useDispatch, useSelector } from "react-redux";
import { Body, Wrapper } from "./styled";
import Cross from "../Cross/Cross";
import MenuBody from "../MenuBody/MenuBody";
import { onToogleMobileMenu } from "../../../reducers/ui";

const FloatingMenu = () => {
  // Redux state
  const isMobileMenuOpen = useSelector((state) => state).ui.isMobileMenuOpen;
  const dispatch = useDispatch();

  if (!isMobileMenuOpen) return null;

  return (
    <Wrapper>
      <Cross onClick={() => dispatch(onToogleMobileMenu())} />
      <Body>
        <MenuBody />
      </Body>
    </Wrapper>
  );
};

export default FloatingMenu;
