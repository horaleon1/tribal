import styled, { css } from "styled-components";
import SrcUsFlag from "../../../images/us_flag.png";
import SrcMxFlag from "../../../images/mexico_flag.png";

export const Wrapper = styled.div`
  position: absolute;
  right: 2em;
  top: 5.5em;
`;

export const ItemWrapper = styled.div``;

export const imgStyles = css`
  height: 32px;
  width: 32px;
`;

export const UsFlag = styled.button`
  ${imgStyles}
  background: url(${SrcUsFlag}) no-repeat;
`;

export const MxFlag = styled.button`
  ${imgStyles}
  background: url(${SrcMxFlag}) no-repeat;
  transform: scale(0.94);
`;
