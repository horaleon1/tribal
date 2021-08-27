import styled from "styled-components";
import { media } from "../../../config/mediaQueries";

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${media.tablet} {
    margin-top: 83px;
    flex: 1;
  }
`;
