import React from "react";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ButtonsWrapper, ButtonWrapper, Title, Wrapper } from "../styled";
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
      <ButtonsWrapper>
        <ButtonWrapper>
          <Button
            label="secondary"
            name="Cancel"
            onClick={() => onCancelOperation()}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            label="harmful"
            name="Remove"
            onClick={() => callToAction()}
          />
        </ButtonWrapper>
      </ButtonsWrapper>
      </Wrapper>
    </Modal>
  );
};

export default WarningModal;
