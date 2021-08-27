import styled from "styled-components";
import { media } from "../../../config/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  @media ${media.tablet} {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  width: 100%;
`;
