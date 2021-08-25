import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const ActiveNavLink = styled(Link)`
  height: 20px;
  width: max-content;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Text = styled.span`
  color: ${theme.grey};
  font-size: ${fontSizes.paragraph};
  font-weight: 800;
  margin-left: 1em;
  &:hover {
    color: ${theme.black};
  }
`;
