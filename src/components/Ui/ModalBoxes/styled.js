import styled, { createGlobalStyle } from "styled-components";
import { fontSizes } from "../../../config/font";
import { media } from "../../../config/mediaQueries";
import { theme } from "../../../config/colors";

export const Wrapper = styled.div`
  height: 100%;
  padding: 90px 0;
  position: relative;
  @media ${media.tablet} {
    padding: 55px 0 25px;
  }
`;

export const Title = styled.h4`
  font-size: ${fontSizes.title};
  font-weight: 700;
  margin-bottom: 0.5em;
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
  padding: 0 0.5em 2em;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${(props) => (props.errors ? `border: 1px solid ${theme.error300}` : "")}
`;

export const FakeInputContent = styled.span`
  color: ${theme.lightBlack};
  font-size: ${fontSizes.paragraph2};
  font-weight: 550;
  opacity: 0.7;
  position: absolute;
  top: 1em;
  left:0.5em;
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
  top: 0.5em;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3em 0 0;
  @media ${media.tablet} {
    margin: 0 auto;
    position: unset;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    padding-top: 1em;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 1em;
  @media ${media.tablet} {
    width: 98px;
  }
`;
export const CalendarError = styled.div`
  color: ${theme.error300};
  font-size: ${fontSizes.paragraph2};
  margin-top: 0.5em;
`;

// styles for react-calendar
export const ReactCalendarStyles = createGlobalStyle`
 .react-calendar{
   width: 100%;
   border:2px solid ${theme.white};
   border-radius: 5px;
   background-color: ${theme.background};
  font-family: "Public Sans", sans-serif;
 }
 .react-calendar__tile--now, .react-calendar__tile--now:hover, 
 .react-calendar__tile--now:enabled:focus,
 .react-calendar__tile--now:enabled:hover, 
 .react-calendar__tile--now:enabled:focus
 {
  background: ${theme.grey};
  color: ${theme.white};
  border-radius: 5px;
 }
 .react-calendar__tile--now button{
  color: ${theme.white};
 }
 /* .react-calendar button {
   color: ${theme.grey};
 } */
 .react-calendar__tile--active, 
 .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus{
  color: ${theme.white};
  background-color: ${theme.grey};
  border-radius: 5px;
 }
 .react-calendar abbr[title]{
   text-decoration: none;
 }
 `;
