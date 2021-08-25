import React from "react";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessCardItem from "../Ui/BusinessCardItem/BusinessCardItem";

const BusinessesList = () => {
  return (
    <LayoutBasePage>
      <HeaderContentPage
        title="Business Name"
        buttonName="Create person"
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

export default BusinessesList;
