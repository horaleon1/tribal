import styled from "styled-components";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;
`;
export const LeftWrapper = styled.div``;
export const Title = styled.h3`
  color: ${theme.black};
  font-size: ${fontSizes.title};
  font-weight: 800;
`;
export const RightWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 220px;
`;
export const ButtonWrapper = styled.div`
  width: 155px;
`;
export const ButtonIcon = styled.button`
  margin-right: 2em;
`;
