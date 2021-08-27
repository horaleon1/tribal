import styled from "styled-components";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const StyleButton = styled.button`
  width: ${(props) => `${props.wdt}`};
  height: 44px;
  padding: 0 1em;
  border-radius: 100px;
  opacity: 1;
  font-weight: 600;
  font-size: ${fontSizes.caption};
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    color: ${theme.grey};
    background-color: ${theme.light};
    opacity: 1;
  }
  ${(props) => {
    switch (props.label) {
      case "primary":
        return `color: ${theme.white}; background-color: ${theme.black}`;
      case "secondary":
        return `color: ${theme.black}; background-color: ${theme.light}`;
      case "destructive":
        return `color: ${theme.error300}; background-color: ${theme.white}; border: 1px solid ${theme.error300}`;
      case "harmful":
        return `color: ${theme.error300}; background-color: ${theme.error200}`;
      default:
        break;
    }
  }}
`;
