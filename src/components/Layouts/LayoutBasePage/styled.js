import styled from "styled-components";
import { theme } from "../../../config/colors";
import { media } from "../../../config/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  background-color: ${theme.background};
  padding: 100px 1em 2em;
  @media ${media.tablet} {
    padding: 190px 2em 2em;
  }
`;
