import React from "react";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessCardItem from "../Ui/BusinessCardItem/BusinessCardItem";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Businesses = () => {
  const [t, i18n] = useTranslation("business");
  const hasSquareLayout = useSelector((state) => state).ui.hasSquaresLayout;

  return (
    <LayoutBasePage>
      <HeaderContentPage
        title="Business Name"
        buttonName={t("business.createPerson")}
        hasIcon
      />
      {!hasSquareLayout && (
        <BusinessCardItem
          name="Kristin Watson"
          position="Medical Assistant"
          telephone="(629) 555-0129"
          email="kristinwatson@gmail.com"
        />
      )}
      {hasSquareLayout && (
        <BusinessListItem
          firstColumn="KristinWatson"
          secondColumn="Medical Assistant"
        />
      )}
    </LayoutBasePage>
  );
};

export default Businesses;
