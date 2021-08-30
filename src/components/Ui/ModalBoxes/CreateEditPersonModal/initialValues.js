export const initialValues = {
  name: "",
  email: "",
  phone: "",
  role: "",
  join_date: "",
};

export const adaptInitialValues = (values = null) => {
  let formValues = initialValues;

  if (values) {
    const { name, email, phone, role, join_date } = values;
    formValues = {
      name,
      email,
      phone,
      role,
      join_date,
    };
  }

  return formValues;
};
