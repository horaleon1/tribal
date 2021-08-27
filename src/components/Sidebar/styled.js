import styled from "styled-components";
import { theme } from "../../config/colors";
import { media } from "../../config/mediaQueries";

export const Wrapper = styled.div`
  background-color: ${theme.background};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 9;
  @media ${media.tablet} {
    width: 250px;
    position: unset;
    height: 100vh;
    padding: 0 1em 0 2em;
    flex-direction: column;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    margin-right: 0.2em;
  }
`;

export const Body = styled.div`
  display: none;
  @media ${media.tablet} {
    width: 100%;
    display: flex;
    flex: 1;
  }
`;

export const FooterWrapper = styled.div`
  display: none;
  @media ${media.tablet} {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 1em 0.5em 2em 0;
  }
`;
