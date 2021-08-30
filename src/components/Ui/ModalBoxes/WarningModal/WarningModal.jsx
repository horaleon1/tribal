import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ButtonsWrapper, ButtonWrapper, Title, Wrapper } from "../styled";
import { useDispatch } from "react-redux";
import { onCloseModalBox } from "../../../../reducers/ui";
import { useTranslation } from "react-i18next";

const WarningModal = ({ modalTitle = "", callToAction }) => {
  const dispatch = useDispatch();

  const onCancelOperation = () => {
    dispatch(onCloseModalBox());
  };

  //Translation
  // eslint-disable-next-line
  const [t, i18n] = useTranslation("ui");

  return (
    <Modal modalType="WARNING_MODAL">
      <Wrapper>
        <Title>{modalTitle}</Title>
        <ButtonsWrapper>
          <ButtonWrapper>
            <Button
              label="secondary"
              name={t("ui.modalCancelButton")}
              onClick={() => onCancelOperation()}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              label="harmful"
              name={t("ui.modalDeleteButton")}
              onClick={() => callToAction()}
            />
          </ButtonWrapper>
        </ButtonsWrapper>
      </Wrapper>
    </Modal>
  );
};

export default WarningModal;
