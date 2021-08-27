import { useState } from "react";
import {
  ButtonWrapper,
  ButtonsWrapper,
  CalendarError,
  CalendarIconWrapper,
  FakeInput,
  FakeInputContent,
  FakeLabel,
  FieldWrapper,
  ReactCalendarStyles,
  Title,
  Wrapper,
} from "../styled";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { onCloseModalBox } from "../../../../reducers/ui";
import { addPerson, getPersons } from "../../../../reducers/persons";
import Calendar from "react-calendar";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";
import Field from "../../Forms/Field/Field";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import * as Yup from "yup";
import IconCalendar from "../../../SVG/Calendar";

const validationSchema = Yup.object({
  name: Yup.string().required("Campo obligatorio"),
  email: Yup.string()
    .email()
    .required("Campo obligatorio")
    .email("Email inválido"),
  phone: Yup.string().required("Campo obligatorio"),
  role: Yup.string().required("Campo obligatorio"),
  join_date: Yup.string().required("Campo obligatorio"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  role: "",
  join_date: "",
};

const CreateEditPersonModal = ({ businessId }) => {
  const dispatch = useDispatch();

  const modalTitle = "Crear persona";

  const onCancelForm = () => {
    dispatch(onCloseModalBox());
  };

  const onSubmit = (values = {}) => {
    const formatedDate = dayjs(values.join_date).format("YYYY-MM-DD");

    values["join_date"] = formatedDate;

    const info = {
      data: values,
      businessId,
    };
    dispatch(addPerson(info))
      .then(() => dispatch(getPersons(businessId)))
      .then(() => dispatch(onCloseModalBox()));
  };
  const [calendarValue, setCalendarValue] = useState("12/09/2013");
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const toggleCalendar = () => setCalendarOpen((prevState) => !prevState);

  const formatPhone = (value = "") => {
    if (!value) return value;
    // Clean string
    const onlyNums = value.replace(/[^\d]/g, "");
    if (onlyNums.length <= 11) {
      return (
        "(" +
        onlyNums.slice(0, 3) +
        ")" +
        " " +
        onlyNums.slice(3, 6) +
        "-" +
        onlyNums.slice(6, 10)
      );
    }
    return onlyNums;
  };

  const handleCalendar = (e) => {
    toggleCalendar();
    setCalendarValue(dayjs(e).format("DD/MM/YYYY"));
  };

  return (
    <Modal modalType="CREATE_EDIT_PERSON_MODAL">
      <Wrapper>
        <Title>{modalTitle}</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors, setFieldValue, values, handleBlur }) => {
            const { name = "", email, phone, role, join_date } = errors;
            return (
              <Form>
                <FieldWrapper>
                  <Field
                    id="name"
                    name="name"
                    label="Business Name"
                    placeholder="John Ryan"
                    errors={name}
                    type="text"
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <Field
                    id="role"
                    name="role"
                    label="role"
                    placeholder="Web Designer"
                    errors={role}
                    type="text"
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <Field
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="michael@tribal.com"
                    errors={email}
                    type="text"
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <Field
                    id="phone"
                    name="phone"
                    label="Phone"
                    placeholder="(307) 555-0133"
                    errors={phone}
                    type="text"
                    onBlur={(e) => {
                      const formatted = formatPhone(values["phone"]);
                      setFieldValue("phone", formatted);
                      handleBlur(e);
                    }}
                  />
                </FieldWrapper>
                <FieldWrapper>
                  <FakeLabel>Join Date</FakeLabel>
                  <FakeInput
                    onClick={toggleCalendar}
                    role="button"
                    errors={join_date}
                  >
                    <FakeInputContent>{calendarValue}</FakeInputContent>
                    <CalendarIconWrapper>
                      <IconCalendar />
                    </CalendarIconWrapper>
                  </FakeInput>
                  {isCalendarOpen && (
                    <>
                      <ReactCalendarStyles />
                      <Calendar
                        // selected={(field.value && new Date(field.value)) || null}
                        onChange={(e) => {
                          setFieldValue("join_date", e);
                          handleCalendar(e);
                        }}
                      />
                    </>
                  )}
                  {join_date && <CalendarError>{join_date}</CalendarError>}
                </FieldWrapper>
                <ButtonsWrapper>
                  <ButtonWrapper>
                    <Button
                      label="secondary"
                      name="Cancel"
                      onClick={() => onCancelForm()}
                    />
                  </ButtonWrapper>
                  <ButtonWrapper>
                    <Button
                      disabled={isSubmitting}
                      label="primary"
                      name="Create"
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

export default CreateEditPersonModal;
