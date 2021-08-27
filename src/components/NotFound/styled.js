import styled, { css } from "styled-components";
import { theme } from "../../config/colors";
import { fontSizes } from "../../config/font";
import { media } from "../../config/mediaQueries";
import { Link } from "react-router-dom";
import img from "../../images/not_found.png";

export const Wrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;
  @media ${media.tablet} {
    height: 60%;
    margin: 0em 1em;
  }
`;
export const Img = styled.div`
  height: 260px;
  width: 260px;
  object-fit: cover;
  background: url(${img}) no-repeat center;
`;
export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 380px;
  margin-top: 1em;
`;
export const stylesTitle = css`
  color: ${theme.black};
`;
export const BigTitle = styled.h4`
  font-size: ${fontSizes.mega};
  ${stylesTitle}
  margin-bottom: 0.25em;
`;
export const Title = styled.p`
  font-size: ${fontSizes.title};
  ${stylesTitle}
`;
export const ButtonWrapper = styled(Link)`
  margin: 1em 0 0;
  width: 100%;
  max-width: 380px;
`;
