import { useRef, useEffect, useCallback } from "react";
import {
  ButtonWrapper,
  ButtonsWrapper,
  FieldWrapper,
  Title,
  Wrapper,
} from "../styled";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { onCloseModalBox } from "../../../../reducers/ui";
import {
  addBusiness,
  getBusinesses,
  updateBusiness,
} from "../../../../reducers/businesses";
import { adaptInitialValues } from "./initialValues";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import Field from "../../../Ui/Forms/Field/Field";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Campo obligatorio"),
});

const AddEditBusiness = ({ editData, onUpdateEditData }) => {
  //Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("home");

  const modalTitle = !editData
    ? t("home.modalBox.addBusiness")
    : t("home.modalBox.editBusiness");

  const modalButton = !editData
    ? t("home.modalBox.buttonAddBusiness")
    : t("home.modalBox.buttonEditBusiness");

  const dispatch = useDispatch();

  const onSubmit = (values = "") => {
    if (editData) {
      //on edit business
      const info = { businessId: editData.businessId, values };
      dispatch(updateBusiness(info))
        .then(() => dispatch(onCloseModalBox()))
        .then(() => dispatch(getBusinesses()));
    } else {
      // on add bussiness
      dispatch(addBusiness(values))
        .then(() => dispatch(onCloseModalBox()))
        .then(() => dispatch(getBusinesses()));
    }
  };

  const initialValues = adaptInitialValues(editData?.name);

  const onCancelForm = () => {
    dispatch(onCloseModalBox());
    // Reset form inital value
    onUpdateEditData(null);
  };

  // Reset form initial value when modal close by clicking outside of modal
  const ref = useRef(null);

  const currentModalType = useSelector((state) => state).ui.modalType;

  const onClickOutside = useCallback(
    (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onCancelForm();
      }
    },
    [currentModalType]
  );

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("mousedown", onClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [currentModalType]);

  return (
    <Modal modalType="ADD_EDIT_BUSINESS_MODAL" closeAction={onCancelForm}>
      <Wrapper ref={ref}>
        <Title>{modalTitle}</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => {
            const { name = "" } = errors;
            return (
              <Form>
                <FieldWrapper>
                  <Field
                    id="name"
                    name="name"
                    label="Business Name"
                    placeholder="Louis Vuitton"
                    errors={name}
                    type="text"
                  />
                </FieldWrapper>
                <ButtonsWrapper>
                  <ButtonWrapper>
                    <Button
                      label="secondary"
                      name={t("home.modalBox.buttonCancel")}
                      onClick={() => onCancelForm()}
                    />
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <Button
                      disabled={isSubmitting}
                      label="primary"
                      name={modalButton}
                    />
                  </ButtonWrapper>
                </ButtonsWrapper>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    </Modal>
  );
};

export default AddEditBusiness;
