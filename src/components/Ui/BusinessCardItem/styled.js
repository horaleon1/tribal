import styled from "styled-components";
import { media } from "../../../config/mediaQueries";
import { theme } from "../../../config/colors";
import { fontSizes } from "../../../config/font";

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  border: 1px solid ${theme.grey300};
  padding: 0 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media ${media.tablet} {
    max-width: 300px;
  }
`;

export const UpperWrapper = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.border};
`;

export const LeftWrapper = styled.div`
  width: 70%;
`;

export const RightWrapper = styled.div`
  width: 30%;
`;

export const InferiorWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Button = styled.button``;

export const Title = styled.p`
  margin-bottom: 0.5em;
  color: ${theme.black};
  font-size: ${fontSizes.paragraph};
`;

export const Subtitle = styled.p`
  margin-bottom: 0.5em;
  color: ${theme.black};
  font-size: ${fontSizes.caption};
`;

export const SubtitleGrey = styled.p`
  color: ${theme.grey200};
  font-size: ${fontSizes.caption};
`;
