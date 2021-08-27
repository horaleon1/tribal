import styled from "styled-components";
import { Link } from "react-router-dom";
import { media } from "../../../config/mediaQueries";
import img from "../../../images/horizontal--logo.png";

export const Wrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3.5em 0 1em;
  z-index: 9;
  position:relative;
  @media ${media.tablet} {
    width: auto;
    justify-content: space-around;
    padding: 0;
    margin-top: 86px;
  }
`;
export const Logo = styled(Link)`
  background: url(${img}) no-repeat center;
  height: 24.75px;
  width: 110px;
  margin-right: 2em;
`;
export const ButtonPill = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PillWrapper = styled.div`
  margin-right: 0.5em;
`;
