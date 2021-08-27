import styled from "styled-components";
import { theme } from "../../../config/colors";
import { media } from "../../../config/mediaQueries";

export const Wrapper = styled.div`
  background: ${theme.background};
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 999;
  @media ${media.tablet} {
    display: none;
  }
`;
export const Body = styled.div`
  margin: 5em 2em 0;
`;
