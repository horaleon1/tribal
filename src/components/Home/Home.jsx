import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { getBusinesses, deleteBusiness } from "../../reducers/businesses";
import { onCloseModalBox, setModalType } from "../../reducers/ui";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";
import Spinner from "../Ui/Spinner/Spinner";
import AddEditBusinessModal from "../Ui/ModalBoxes/AddEditBusiness/AddEditBusiness";
import WarningModal from "../Ui/ModalBoxes/WarningModal/WarningModal";
import { WithoutBusinesses } from "./styled";

const Home = () => {
  //Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("home");
  //Redux state
  const businesses =
    useSelector((state) => state).businesses.businesses.businesses || [];
  const status = useSelector((state) => state).businesses.status;
  const isLoading = status === "loading";
  const dispatch = useDispatch();
  // Router history
  const history = useHistory();
  // Push route to persons list page.
  const onPushToBusinessData = (businessId) => {
    history.push(`/business/${businessId}`);
  };
  // Local state
  const [editData, setEditData] = useState(null);
  const [selectedId, setSelectedId] = useState({ businessId: "", name: "" });
  // Delete business by businessId
  const onDeleteBusiness = (businessId) => {
    dispatch(deleteBusiness(businessId)).then(() => {
      dispatch(getBusinesses()).then(() => dispatch(onCloseModalBox()));
    });
  };
  // Obtain all the necessary information to be able to update data
  const findEditData = (selectedItem) => {
    const find = businesses.find((item) => item.name === selectedItem);
    onUpdateEditData(find);
    onOpenModal();
  };
  // Open Add/Edit modal
  const onOpenModal = () => {
    dispatch(setModalType("ADD_EDIT_BUSINESS_MODAL"));
  };
  // Modal confirmation to delete business
  const onOpenWarning = (businessId, name) => {
    // Save state to feed modal custom title
    setSelectedId({ businessId, name });
    dispatch(setModalType("WARNING_MODAL"));
  };
  // Used in modal to clear local state when modal closes
  const onUpdateEditData = (data) => {
    setEditData(data);
  };

  useEffect(() => {
    dispatch(getBusinesses());
  }, []);

  return (
    <>
      <AddEditBusinessModal
        editData={editData}
        onUpdateEditData={onUpdateEditData}
      />
      <WarningModal
        modalTitle={`${t("home.warningModalDelete")} ${selectedId.name}?`}
        callToAction={() => onDeleteBusiness(selectedId.businessId)}
      />
      <LayoutBasePage>
        <HeaderContentPage
          title={t("home.businesses")}
          buttonName={t("home.createbusiness")}
          buttonAction={() => onOpenModal()}
        />
        {isLoading && <Spinner />}
        {!isLoading && !businesses.length && (
          <WithoutBusinesses>{t("home.withoutBusinesses")}</WithoutBusinesses>
        )}
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
