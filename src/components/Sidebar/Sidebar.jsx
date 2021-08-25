import React from "react";
import {
  BodyWrapper,
  ButtonPill,
  FooterWrapper,
  HeaderWrapper,
  Logo,
  PillWrapper,
  Wrapper,
} from "./styled";
import Pill from "../Ui/Pill/Pill";
import Link from "../Ui/Link/Link";
import ArrowDown from "../SVG/ArrowDown";
import Bank from "../SVG/Bank";
import Bell from "../SVG/Bell";
import DebitCard from "../SVG/DebitCard";
import DollarSign from "../SVG/DollarSign";
import Squares from "../SVG/Squares";
import SidebarItem from "../Ui/SidebarItem/SidebarItem";
import User from "../SVG/User";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [t, i18n] = useTranslation("sidebar");
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo to="/" />
        <ButtonPill>
          <PillWrapper>
            <Pill initials="HL" />
          </PillWrapper>
          <ArrowDown />
        </ButtonPill>
      </HeaderWrapper>
      <BodyWrapper>
        <SidebarItem icon={<Squares />} name={t("sidebar.overview")} to="/overview" />
        <SidebarItem icon={<Bank />} name="Tribal Pay" to="/tribalPay" />
        <SidebarItem
          icon={<DebitCard />}
          name="Tribal Credit"
          to="/tribalcredit"
        />
        <SidebarItem icon={<DollarSign />} name={t("sidebar.payments")} to="/payments" />
        <SidebarItem icon={<Bell />} name={t("sidebar.notifications")} to="/notifications" />
        <SidebarItem icon={<User />} name={t("sidebar.users")} to="/users" />
      </BodyWrapper>
      <FooterWrapper>
        <Link name="Legal" to="/legal" />
        <Link name="FAQ" to="/faq" />
        <Link name={t("sidebar.support")} to="/Support" />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Sidebar;
