import React from "react";
import {
  Button,
  NameWrapper,
  PositionWrapper,
  Title,
  ToolsWrapper,
  Wrapper,
} from "./styled";
import Pencil from "../../SVG/Pencil";
import Trash from "../../SVG/Trash";

const BusinessListItem = ({ firstColumn, secondColumn = "" }) => {
  return (
    <Wrapper>
      <NameWrapper>{firstColumn}</NameWrapper>
      {secondColumn !== "" && <PositionWrapper>{secondColumn}</PositionWrapper>}
      <ToolsWrapper>
        <Button>
          <Pencil />
        </Button>
        <Button>
          <Trash />
        </Button>
      </ToolsWrapper>
    </Wrapper>
  );
};

export default BusinessListItem;
