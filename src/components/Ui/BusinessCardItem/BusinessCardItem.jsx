import React from "react";
import {
  Button,
  InferiorWrapper,
  Subtitle,
  SubtitleGrey,
  Title,
  UpperWrapper,
  Wrapper,
} from "./styled";
import Pencil from "../../SVG/Pencil";
import Trash from "../../SVG/Trash";
import { LeftWrapper, RightWrapper } from "../HeaderContentPage/styled";

const BusinessCardItem = ({
  name = "",
  position = "",
  telephone = "",
  email = "",
}) => {
  return (
    <Wrapper>
        <UpperWrapper>
          <LeftWrapper>
            <Title>{name}</Title>
            <SubtitleGrey>{position}</SubtitleGrey>
          </LeftWrapper>
          <RightWrapper>
            <Button>
              <Pencil />
            </Button>
            <Button>
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
