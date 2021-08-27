import React from "react";
import { Error, Label, StyledField, Wrapper } from "./styled";

const Field = ({
  id = "",
  name = "",
  placeholder = "",
  type = "text",
  label = "",
  errors = "",
  ...rest
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledField
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        errors={errors}
        {...rest}
      />
      {errors && <Error>{errors}</Error>}
    </Wrapper>
  );
};

export default Field;
