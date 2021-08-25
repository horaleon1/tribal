import React from "react";
import { StyleButton } from "./styled";

const Button = ({
  name = "",
  type = "submit",
  disabled = false,
  label = "primary",
  onClick = () => false,
}) => {
  return (
    <StyleButton
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
      label={label}
    >
      {name}
    </StyleButton>
  );
};

export default Button;
