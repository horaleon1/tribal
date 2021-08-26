import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { getBusinesses, deleteBusiness } from "../../reducers/businesses";
import { onCloseModalBox, setModalType } from "../../reducers/ui";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";
import Spinner from "../Ui/Spinner/Spinner";
import AddEditBusiness from "../Ui/ModalBoxes/AddEditBusiness/AddEditBusiness";
import WarningModal from "../Ui/ModalBoxes/WarningModal/WarningModal";

const Home = () => {
  const businesses = useSelector((state) => state).businesses.businesses
    .businesses;
  const status = useSelector((state) => state).businesses.status;

  const isLoading = status === "loading";

  const [t, i18n] = useTranslation("home");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinesses());
  }, []);

  const onDeleteBusiness = (businessId) => {
    dispatch(deleteBusiness(businessId)).then(() => {
      dispatch(getBusinesses()).then(() => dispatch(onCloseModalBox()));
    });
  };

  const [editData, setEditData] = useState(null);

  const onUpdateEditData = (data) => {
    setEditData(data);
  };

  const findEditData = (selectedItem) => {
    const find = businesses.find((item) => item.name === selectedItem);
    onUpdateEditData(find);
    onOpenModal();
  };

  const onOpenModal = () => {
    dispatch(setModalType("ADD_EDIT_BUSINESS_MODAL"));
  };

  const history = useHistory();

  const onPushToBusinessData = (businessId) => {
    history.push(`/business/${businessId}`);
  };

  const [selectedId, setSelectedId] = useState({ businessId: "", name: "" });

  const onOpenWarning = (businessId, name) => {
    setSelectedId({ businessId, name });
    dispatch(setModalType("WARNING_MODAL"));
  };

  return (
    <>
      <AddEditBusiness
        editData={editData}
        onUpdateEditData={onUpdateEditData}
      />
      <WarningModal
        modalTitle={`Are you sure to delete ${selectedId.name}?`}
        callToAction={() => onDeleteBusiness(selectedId.businessId)}
      />
      <LayoutBasePage>
        <HeaderContentPage
          title={t("home.businesses")}
          buttonName={t("home.createbusiness")}
          buttonAction={() => onOpenModal()}
        />
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            {businesses?.map(({ businessId, name }) => (
              <BusinessListItem
                key={businessId}
                firstColumn={name}
                deleteAction={() => onOpenWarning(businessId, name)}
                editAction={() => findEditData(name)}
                onClick={() => onPushToBusinessData(businessId)}
              />
            ))}
          </>
        )}
      </LayoutBasePage>
    </>
  );
};

export default Home;
