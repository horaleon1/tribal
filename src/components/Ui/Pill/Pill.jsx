import React from "react";
import { Circle, Text } from "./styled";

const Pill = ({ initials = "" }) => {
  return (
    <Circle>
      <Text>{initials}</Text>
    </Circle>
  );
};

export default Pill;
