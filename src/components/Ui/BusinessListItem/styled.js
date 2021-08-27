import styled from "styled-components";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";
import { media } from "../../../config/mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.border};
  color: ${theme.black};
  margin: 1em 0;
  padding: 0 0 0.5em;
  @media ${media.tablet} {
    margin: 0;
    padding: 1.5em 0;
    flex-direction: row;
  }
`;
export const LinkWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  flex-direction: column;
  @media ${media.tablet} {
    flex-direction: row;
  }
`;
export const NameWrapper = styled.div`
  width: 40%;
  font-weight: 700;
  color: ${theme.black};
  margin-bottom: 0.5em;
  @media ${media.tablet} {
    margin-bottom: 0;
  }
`;
export const PositionWrapper = styled.div`
  width: 50%;
  margin-bottom: 0.5em;
  @media ${media.tablet} {
    margin-bottom: 0;
  }
`;
export const ToolsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1em 0;
  @media ${media.tablet} {
    margin: 0;
    width: 10%;
    justify-content: flex-end;
  }
`;
export const Title = styled.p`
  font-size: ${fontSizes.subtitle};
`;
export const Button = styled.button`
  margin-left: 1em;
  @media ${media.tablet} {
    margin: 0 0 0 1.5em;
  }
`;
