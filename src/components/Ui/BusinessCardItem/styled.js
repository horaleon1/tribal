import styled, { css } from "styled-components";
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
  overflow: hidden;
  margin-bottom: 1em;
  @media ${media.tablet} {
    margin-right: 1em;
    width: calc(50% - 1em);
  }
  @media ${media.desktop2} {
    width: calc(33.33% - 1em);
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
  width: 90%;
`;

export const RightWrapper = styled.div`
  width: 10%;
`;

export const InferiorWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Button = styled.button``;

export const ellipsis = css`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Title = styled.p`
  margin-bottom: 0.5em;
  color: ${theme.black};
  font-size: ${fontSizes.paragraph};
  ${ellipsis}
`;

export const Subtitle = styled.p`
  margin-bottom: 0.5em;
  color: ${theme.black};
  font-size: ${fontSizes.caption};
  ${ellipsis}
`;

export const SubtitleGrey = styled.p`
  color: ${theme.grey200};
  font-size: ${fontSizes.caption};
`;
