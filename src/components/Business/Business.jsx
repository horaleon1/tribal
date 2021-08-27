import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessById } from "../../reducers/businesses";
import { getPersons, deletePerson } from "../../reducers/persons";
import { onCloseModalBox, setModalType } from "../../reducers/ui";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessCardItem from "../Ui/BusinessCardItem/BusinessCardItem";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";
import Spinner from "../Ui/Spinner/Spinner";
import WarningModal from "../Ui/ModalBoxes/WarningModal/WarningModal";
import CreateEditPersonModal from "../Ui/ModalBoxes/CreateEditPersonModal/CreateEditPersonModal";
import { WrapperListCard, WithoutPersons } from './styled';

const Businesses = () => {
  // Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("business");
  // Redux state
  const hasSquareLayout = useSelector((state) => state).ui.hasSquaresLayout;
  const status = useSelector((state) => state).persons.status;
  const isLoading = status === "loading";
  const dispatch = useDispatch();
  // get businessId from router
  const { businessId = "" } = useParams();
  //Business
  const { name: businessName } = useSelector((state) => state).businesses
    .business;
  //Persons
  const persons = useSelector((state) => state).persons.persons.persons || [];
  //Local State for pass data to modal
  const [selectedPerson, setSelectedPerson] = useState({
    personId: "",
    name: "",
  });
  // Modal confirmation to delete person
  const onOpenWarning = (personId, name) => {
    // Save state to feed modal custom title
    setSelectedPerson({ personId, name });
    dispatch(setModalType("WARNING_MODAL"));
  };
  // Open Create/Edit modal
  const onOpenModal = () => {
    dispatch(setModalType("CREATE_EDIT_PERSON_MODAL"));
  };
  // Delete person by personId
  const onDeletePerson = (personId, businessId) => {
    const info = {
      businessId,
      personId,
    };
    dispatch(deletePerson(info))
      .then(() => dispatch(getPersons(businessId)))
      .then(() => dispatch(onCloseModalBox()));
  };

  useEffect(() => {
    dispatch(getBusinessById(businessId)).then(() =>
      dispatch(getPersons(businessId))
    );
  }, []);

  return (
    <>
      <CreateEditPersonModal businessId={businessId} />
      <WarningModal
        modalTitle={`Are you sure to delete ${selectedPerson.name}`}
        callToAction={() => onDeletePerson(selectedPerson.personId, businessId)}
      />
      <LayoutBasePage>
        <HeaderContentPage
          title={businessName}
          buttonName={t("business.createPerson")}
          hasIcon
          buttonAction={() => onOpenModal()}
        />
        {isLoading && <Spinner />}

        {
          !isLoading && !persons.length &&
          <WithoutPersons>{t("business.withoutPersons")}</WithoutPersons>
        }

        {!hasSquareLayout && !isLoading && (
          <WrapperListCard>
            {persons.map(({ personId, name, role, phone, email }) => (
              <BusinessCardItem
                key={personId}
                name={name}
                position={role}
                telephone={phone}
                email={email}
                deleteAction={() => onOpenWarning(personId, name)}
              />
            ))}
          </WrapperListCard>
        )}
        {hasSquareLayout && !isLoading && (
          <>
            {persons.map(({ personId, name, role }) => (
              <BusinessListItem
                key={personId}
                firstColumn={name}
                secondColumn={role}
                deleteAction={() => onOpenWarning(personId, name)}
              />
            ))}
          </>
        )}
      </LayoutBasePage>
    </>
  );
};

export default Businesses;
