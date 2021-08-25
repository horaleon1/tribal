import React from "react";
import { StyleButton } from "./styled";

const Button = ({
  name = "",
  type = "submit",
  disabled = false,
  label = "primary",
  onClick = () => false,
  wdt = '100%'
}) => {
  return (
    <StyleButton
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
      label={label}
      wdt={wdt}
    >
      {name}
    </StyleButton>
  );
};

export default Button;
