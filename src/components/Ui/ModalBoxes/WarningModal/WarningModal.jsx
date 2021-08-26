import React from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ButtonsWrapper,Title, Wrapper } from "../styled";
import { useDispatch } from "react-redux";
import { onCloseModalBox } from "../../../../reducers/ui";

const WarningModal = ({ modalTitle = "", callToAction }) => {
  const dispatch = useDispatch();

  const onCancelOperation = () => {
    dispatch(onCloseModalBox());
  };
  return (
    <Modal modalType="WARNING_MODAL">
      <Wrapper>
        <Title>{modalTitle}</Title>
      </Wrapper>
      <ButtonsWrapper>
        <Button
          label="secondary"
          name="Cancel"
          wdt="95px"
          onClick={() => onCancelOperation()}
        />
        <Button
          label="harmful"
          name="Remove"
          wdt="95px"
          onClick={() => callToAction()}
        />
      </ButtonsWrapper>
    </Modal>
  );
};

export default WarningModal;
