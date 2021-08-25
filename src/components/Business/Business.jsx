import React from "react";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessCardItem from "../Ui/BusinessCardItem/BusinessCardItem";
import { useTranslation } from "react-i18next";

const Businesses = () => {
  const [t, i18n] = useTranslation("business");
  return (
    <LayoutBasePage>
      <HeaderContentPage
        title="Business Name"
        buttonName={t("business.createPerson")}
        hasIcon
      />
      <BusinessCardItem
        name="Kristin Watson"
        position="Medical Assistant"
        telephone="(629) 555-0129"
        email="kristinwatson@gmail.com"
      />
    </LayoutBasePage>
  );
};

export default Businesses;
