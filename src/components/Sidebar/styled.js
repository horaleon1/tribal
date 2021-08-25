import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../config/colors";
import img from "../../images/horizontal--logo.png";

export const Wrapper = styled.div`
  min-width: 250px;
  height: 100vh;
  background-color: ${theme.background};
  padding: 0 1em 0 2em;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  margin-right: 0.2em;
`;

export const HeaderWrapper = styled.div`
  margin-top: 86px;
  height: 40px;
  display: flex;
  justify-content: justify-content;
  align-items: center;
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

export const BodyWrapper = styled.div`
  margin-top: 83px;
  flex: 1;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em 1em 2em;
`;
