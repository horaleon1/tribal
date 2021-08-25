import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const Link = styled(NavLink)`
  color: ${theme.lightGrey};
  font-size: ${fontSizes.caption};
  &:hover {
    color: ${theme.black};
  }
`;
