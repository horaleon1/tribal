import { useTranslation } from "react-i18next";
import Bank from "../../SVG/Bank";
import Bell from "../../SVG/Bell";
import DebitCard from "../../SVG/DebitCard";
import DollarSign from "../../SVG/DollarSign";
import Squares from "../../SVG/Squares";
import SidebarItem from "../../Ui/SidebarItem/SidebarItem";
import User from "../../SVG/User";
import { BodyWrapper } from "./styled";

const MenuBody = () => {
  // Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("sidebar");

  return (
    <BodyWrapper>
      <SidebarItem
        icon={<Squares />}
        name={t("sidebar.overview")}
        to="/overview"
      />
      <SidebarItem icon={<Bank />} name="Tribal Pay" to="/tribalPay" />
      <SidebarItem
        icon={<DebitCard />}
        name="Tribal Credit"
        to="/tribalcredit"
      />
      <SidebarItem
        icon={<DollarSign />}
        name={t("sidebar.payments")}
        to="/payments"
      />
      <SidebarItem
        icon={<Bell />}
        name={t("sidebar.notifications")}
        to="/notifications"
      />
      <SidebarItem icon={<User />} name={t("sidebar.users")} to="/users" />
    </BodyWrapper>
  );
};

export default MenuBody;
