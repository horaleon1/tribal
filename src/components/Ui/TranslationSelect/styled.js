import styled, { css } from "styled-components";
import SrcUsFlag from "../../../images/us_flag.png";
import SrcMxFlag from "../../../images/mexico_flag.png";
import { fontSizes } from "../../../config/font";
import { media } from "../../../config/mediaQueries";
import { theme } from "../../../config/colors";

export const Wrapper = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 5.5em;
  top: 0.5em;
  z-index: 10;
  @media ${media.tablet} {
    right: 2em;
    top: 5.5em;
  }
`;
export const imgStyles = css`
  height: 32px;
  width: 32px;
`;
export const Title = styled.h4`
  display: none;
  @media ${media.tablet} {
    margin-left: 0.25em;
    font-size: ${fontSizes.paragraph};
    color: ${theme.grey};
  }
`;
export const UsFlag = styled.button`
  ${imgStyles}
  background: url(${SrcUsFlag}) no-repeat;
  transform: scale(0.8);
`;
export const MxFlag = styled.button`
  ${imgStyles}
  background: url(${SrcMxFlag}) no-repeat;
  transform: scale(0.8);
`;
