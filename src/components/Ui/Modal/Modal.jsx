import React from "react";
import { Overlay, Wrapper } from "./styled";
import Cross from "../Cross/Cross";
import { Form, Formik } from "formik";
import Field from "../Forms/Field/Field";
import Button from "../Button/Button";
import * as Yup from "yup";

const initialValues = {
  businessName: "",
};

const validationSchema = Yup.object({
  businessName: Yup.string().required("Campo obligatorio"),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Modal = () => {
  return (
    <Overlay>
      <Wrapper>
        <Cross onClick={() => false} />
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
                <div>

                <Field
                  id="businessName"
                  name="businessName"
                  label="Business Name"
                  placeholder="Louis Vuitton"
                  errors={businessName}
                  type="text"
                />
                </div>

                <Button disabled={isSubmitting} label="primary" name="Create">Crear</Button>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    </Overlay>
  );
};

export default Modal;
