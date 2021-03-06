import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const rotate = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(-360deg);}
`;

const rotateOpp = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`;

export const Loader = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 7px solid transparent;
  border-top: 7px solid #ede451;
  border-bottom: 7px solid #ede451;
  animation: ${rotateOpp} 1.8s linear infinite;
  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 7px solid transparent;
    border-left: 7px solid #89e4c1;
    border-right: 7px solid #89e4c1;
    animation: ${rotate} 0.9s linear infinite;
  }
`;
