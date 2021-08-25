import styled from "styled-components";
import { Field } from "formik";
import { theme } from "../../../../config/colors";
import { fontSizes } from "../../../../config/font";

export const Wrapper = styled.div`
  min-height: 44px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
`;

export const Label = styled.label`
  font-size: ${fontSizes.paragraph2};
  font-weight: 600;
  color: ${theme.grey};
  margin-bottom: 0.5em;
`;

export const Error = styled.div`
  color: ${theme.error200};
`;

export const StyledField = styled(Field)`
  height: 44px;
  border-radius: 5px;
  background-color: ${theme.background};
  font-size: ${fontSizes.paragraph};
  border-color: transparent;
  padding: 0 0.5em;
  &::placeholder {
    color: ${theme.lightBlack};
    padding: 0 0.5em;
    font-size: ${fontSizes.paragraph2};
    font-weight: 550;
  }
  ${(props) => (props.errors ? `border: 1px solid ${theme.error200}` : "")}
`;
