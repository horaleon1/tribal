import styled from "styled-components";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";
import { media } from "../../../config/mediaQueries";

export const Wrapper = styled.div`
  min-height: 44px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3em;
  position: relative;
  @media ${media.tablet} {
    flex-direction: row;
  }
`;
export const LeftWrapper = styled.div`
  width: 100%;
`;
export const Title = styled.h3`
  color: ${theme.black};
  font-size: ${fontSizes.mega};
  font-weight: 800;
`;
export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.5em 0 0;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media ${media.tablet} {
    margin: 0;
    max-width: 220px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const IconWrapper = styled.div`
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  width: 155px;
  margin: 0 1em 0 0;
  @media ${media.tablet} {
    margin: 0;
  }
`;
export const ButtonIcon = styled.button`
  @media ${media.tablet} {
    margin: 0 2em 0 0;
  }
`;
