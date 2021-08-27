import { useDispatch } from "react-redux";
import { ActiveNavLink, Text } from "./styled";
import { onToogleMobileMenu } from "../../../reducers/ui";

const SidebarItem = ({ icon = "", name = "", to = "" }) => {
  const dispatch = useDispatch();
  return (
    <ActiveNavLink to={to} onClick={() => dispatch(onToogleMobileMenu())}>
      {icon} <Text>{name}</Text>
    </ActiveNavLink>
  );
};

export default SidebarItem;
