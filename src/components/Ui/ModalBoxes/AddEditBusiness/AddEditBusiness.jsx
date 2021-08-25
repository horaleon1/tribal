import React from "react";
import Modal from "../../Modal/Modal";
import { Formik, Form } from "formik";
import { ButtonsWrapper, FieldWrapper, Title, Wrapper } from "./styled";
import Button from "../../Button/Button";
import Field from "../../../Ui/Forms/Field/Field";
import { useTranslation } from "react-i18next";

import * as Yup from "yup";

const initialValues = {
  businessName: "",
};

const validationSchema = Yup.object({
  businessName: Yup.string().required("Campo obligatorio"),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const AddEditBusiness = ({ isAddBusiness }) => {
  const [t, i18n] = useTranslation("home");

  const modalTitle = isAddBusiness
    ? t("home.modalBox.addBusiness")
    : t("home.modalBox.editBusiness");

  return (
    <Modal modalType="ADD_EDIT_BUSINESS_MODAL">
      <Wrapper>
        <Title>{modalTitle}</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await sleep(5000);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting, errors }) => {
            const { businessName = "" } = errors;
            return (
              <Form>
                <FieldWrapper>
                  <Field
                    id="businessName"
                    name="businessName"
                    label="Business Name"
                    placeholder="Louis Vuitton"
                    errors={businessName}
                    type="text"
                  />
                </FieldWrapper>
                <ButtonsWrapper>
                  <Button label="secondary" name="Cancel" wdt="93px" />

                  <Button
                    disabled={isSubmitting}
                    label="primary"
                    name="Create"
                    wdt="93px"
                  />
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
