import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";
import { getUsers } from "../../reducers/businesses";

const Home = () => {
  const count = useSelector((state) => state).businesses.value;
  const users = useSelector((state) => state).businesses.businesses;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <LayoutBasePage>
      <HeaderContentPage title="Business" buttonName="Create business" />
      <BusinessListItem firstColumn="Louis Vuitton" />
      {/* {
        users.map(user => (
          <BusinessListItem key={user.id} firstColumn={user.name} secondColumn={user.username} />

        ))
      } */}
      {/* <button onClick={() => dispatch(increment())}>Mas</button> */}
      Count:{count}
    </LayoutBasePage>
  );
};

export default Home;
