import React from "react";
import {
  Button,
  LinkWrapper,
  NameWrapper,
  PositionWrapper,
  ToolsWrapper,
  Wrapper,
} from "./styled";
import Pencil from "../../SVG/Pencil";
import Trash from "../../SVG/Trash";

const BusinessListItem = ({
  firstColumn,
  secondColumn = "",
  deleteAction,
  editAction,
  onClick = () => false,
}) => {
  return (
    <Wrapper>
      <LinkWrapper onClick={() => onClick()} role="button">
        <NameWrapper>{firstColumn}</NameWrapper>
        {secondColumn !== "" && (
          <PositionWrapper>{secondColumn}</PositionWrapper>
        )}
      </LinkWrapper>
      <ToolsWrapper>
        <Button onClick={() => editAction()}>
          <Pencil />
        </Button>
        <Button onClick={() => deleteAction()}>
          <Trash />
        </Button>
      </ToolsWrapper>
    </Wrapper>
  );
};

export default BusinessListItem;
