import styled from "styled-components";
import { fontSizes } from "../../../config/font";
import { media } from "../../../config/mediaQueries";
import { theme } from "../../../config/colors";

export const Wrapper = styled.div`
  padding: 50px 0;
  @media ${media.tablet} {
    padding: 35px 0;
  }
`;

export const Title = styled.h4`
  font-size: ${fontSizes.title};
  font-weight: 700;
  @media ${media.tablet} {
    font-size: ${fontSizes.subtitle2};
    text-align: center;
  }
`;

export const FieldWrapper = styled.div`
  margin: 1.5em 0 0.5em;
`;

export const FakeInput = styled.div`
  height: 44px;
  border-radius: 5px;
  background-color: ${theme.background};
  font-size: ${fontSizes.paragraph};
  padding: 0 0.5em;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 0 2em;
`;
export const FakeLabel = styled.p`
  font-size: ${fontSizes.paragraph2};
  font-weight: 600;
  color: ${theme.grey};
  margin-bottom: 0.5em;
`;

export const CalendarIconWrapper = styled.div`
  position: absolute;
  right: 0.5em;
`;

export const ButtonsWrapper = styled.div`
  @media ${media.tablet} {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
`;
