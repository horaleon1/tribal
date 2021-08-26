import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { getBusinessById } from "../../reducers/businesses";
import { getPersons, deletePerson, addPerson } from "../../reducers/persons";
import HeaderContentPage from "../Ui/HeaderContentPage/HeaderContentPage";
import LayoutBasePage from "../Layouts/LayoutBasePage/LayoutBasePage";
import BusinessCardItem from "../Ui/BusinessCardItem/BusinessCardItem";
import BusinessListItem from "../Ui/BusinessListItem/BusinessListItem";
import WarningModal from "../Ui/ModalBoxes/WarningModal/WarningModal";
import { onCloseModalBox, setModalType } from "../../reducers/ui";
import CreateEditPersonModal from "../Ui/ModalBoxes/CreateEditPersonModal/CreateEditPersonModal";

const Businesses = () => {
  const [t, i18n] = useTranslation("business");
  const hasSquareLayout = useSelector((state) => state).ui.hasSquaresLayout;

  const { businessId = "" } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessById(businessId)).then(() =>
      dispatch(getPersons(businessId))
    );
  }, []);

  //Business
  const { name: businessName } = useSelector((state) => state).businesses
    .business;
  //Persons
  const persons = useSelector((state) => state).persons.persons.persons || [];

  const [selectedPerson, setSelectedPerson] = useState({
    personId: "",
    name: "",
  });

  const onOpenWarning = (personId, name) => {
    setSelectedPerson({ personId, name });
    dispatch(setModalType("WARNING_MODAL"));
  };

  const onDeletePerson = (personId, businessId) => {
    const info = {
      businessId,
      personId,
    };
    dispatch(deletePerson(info))
      .then(() => dispatch(getPersons(businessId)))
      .then(() => dispatch(onCloseModalBox()));
  };

  const onOpenModal = () => {
    dispatch(setModalType("CREATE_EDIT_PERSON_MODAL"));
  };

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
        {!hasSquareLayout && (
          <>
            {persons.map(({ personId, name, role, phone, email }) => (
              <BusinessCardItem
                key={personId}
                name={name}
                position={role}
                telephone={phone}
                email={email}
              />
            ))}
          </>
        )}
        {hasSquareLayout && (
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
