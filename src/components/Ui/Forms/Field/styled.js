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
  font-size: ${fontSizes.paragraph};
  color: ${theme.grey};
`;

export const Error = styled.div`
  color: ${theme.error200};
`;

export const StyledField = styled(Field)`
  border-radius: 5px;
  background-color: ${theme.background};
  font-size: ${fontSizes.paragraph};
  &::placeholder {
    color: ${theme.black};
  }
  ${(props) => (props.errors ? `border: 1px solid ${theme.error200}` : "")}
`;
