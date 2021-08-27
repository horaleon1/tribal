import React from "react";
import {
  Button,
  InferiorWrapper,
  LeftWrapper,
  RightWrapper,
  Subtitle,
  SubtitleGrey,
  Title,
  UpperWrapper,
  Wrapper,
} from "./styled";
// import Pencil from "../../SVG/Pencil";
import Trash from "../../SVG/Trash";

const BusinessCardItem = ({
  name = "",
  position = "",
  telephone = "",
  email = "",
  deleteAction,
}) => {
  return (
    <Wrapper>
      <UpperWrapper>
        <LeftWrapper>
          <Title>{name}</Title>
          <SubtitleGrey>{position}</SubtitleGrey>
        </LeftWrapper>
        <RightWrapper>
          {/* <Button>
            <Pencil />
          </Button> */}
          <Button onClick={() => deleteAction()}>
            <Trash />
          </Button>
        </RightWrapper>
      </UpperWrapper>
      <InferiorWrapper>
        <Subtitle>{telephone}</Subtitle>
        <Subtitle>{email}</Subtitle>
      </InferiorWrapper>
    </Wrapper>
  );
};

export default BusinessCardItem;
