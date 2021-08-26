import styled from "styled-components";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const Wrapper = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.border};
  padding-bottom: 1.5em;
  margin-top: 1.5em;
  color: ${theme.black};
`;
export const LinkWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  cursor: pointer;
`;
export const NameWrapper = styled.div`
  width: 40%;
`;
export const PositionWrapper = styled.div`
  width: 50%;
`;
export const ToolsWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
`;
export const Title = styled.p`
  font-size: ${fontSizes.subtitle};
`;
export const Button = styled.button`
  margin-left: 1.5em;
`;
