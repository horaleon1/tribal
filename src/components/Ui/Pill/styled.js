import styled from "styled-components";
import { theme } from "../../../config/colors";

export const Circle = styled.div`
  background-color: ${theme.black};
  border-radius: 50%;
  position: relative;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
export const Text = styled.span`
  color: ${theme.white};
  font-weight: 600;
  text-transform: uppercase;
  position: absolute;
`;
