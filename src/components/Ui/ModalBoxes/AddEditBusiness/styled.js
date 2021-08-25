import styled from "styled-components";
import { fontSizes } from "../../../../config/font";
import { media } from "../../../../config/mediaQueries";

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

export const ButtonsWrapper = styled.button`
  @media ${media.tablet} {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
`;
