import styled from "styled-components";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.border};
  padding-bottom: 1.5em;
  margin-top: 1.5em;
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
