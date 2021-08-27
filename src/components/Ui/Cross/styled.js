import styled from "styled-components";
import { theme } from "../../../config/colors";

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2.2em;
  top: 1em;
  width: 38px;
  height: 38px;
  opacity: 0.3;
  cursor: pointer;
  z-index:12;
  &:after,
  &:before {
    position: absolute;
    content: " ";
    height: 16px;
    width: 2px;
    background-color: ${theme.black};
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
  &:hover {
    opacity: 1;
  }
`;
