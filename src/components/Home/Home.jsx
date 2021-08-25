import React from "react";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";

const Home = () => {
  return (
    <LayoutBasePage>
      <HeaderContentPage title="Business" buttonName="Create business" />
      <BusinessListItem firstColumn="Louis Vuitton" />
      <BusinessListItem firstColumn="Adidas" secondColumn="Web Designer" />
    </LayoutBasePage>
  );
};

export default Home;
