import React from "react";
import { ActiveNavLink, Text } from "./styled";

const SidebarItem = ({icon = "", name = "", to = ""}) => {
  return (
    <ActiveNavLink to={to}>
      {icon} <Text>{name}</Text>
    </ActiveNavLink>
  );
};

export default SidebarItem;
