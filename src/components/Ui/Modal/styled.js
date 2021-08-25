import styled from "styled-components";
import { theme } from "../../../config/colors";
import { media } from "../../../config/mediaQueries";

export const Overlay = styled.div`
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: ${theme.white};
  height: 100vh;
  width: 100%;
  @media ${media.tablet} {
    width: 450px;
    height: 270px;
    border-radius: 29px;
  }
`;
