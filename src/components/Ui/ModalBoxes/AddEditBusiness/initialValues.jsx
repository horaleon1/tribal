export const initialValues = {
  name: "",
};

export const adaptInitialValues = (value = "") => {
  let formValues = initialValues;

  if (value) {
    formValues = {
        name: value
    }
  }

  return formValues;
};
