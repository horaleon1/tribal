import { useTranslation } from "react-i18next";
import { Body, FooterWrapper, Wrapper } from "./styled";
import MenuHeader from "../Ui/MenuHeader/MenuHeader";
import MenuBody from "../Ui/MenuBody/MenuBody";
import Link from "../Ui/Link/Link";

const Sidebar = () => {
  // Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("sidebar");
  return (
    <Wrapper>
      <MenuHeader />
      <Body>
        <MenuBody />
      </Body>
      <FooterWrapper>
        <Link name="Legal" to="/legal" />
        <Link name="FAQ" to="/faq" />
        <Link name={t("sidebar.support")} to="/Support" />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Sidebar;
