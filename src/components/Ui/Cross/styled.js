import styled from "styled-components";
import { theme } from "../../../config/colors";

export const Icon = styled.span`
  position: absolute;
  right: 1em;
  top: 1em;
  width: 14px;
  height: 14px;
  opacity: 0.3;
  &:after,
  &before {
    position: absolute;
    left: 15px;
    content: " ";
    height: 14px;
    width: 2px;
    background-color: ${theme.black};
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
`;
