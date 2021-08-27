import { useHistory } from "react-router";
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
  const history = useHistory();

  // Hide Pencil Icon Temporary (unsupported funcionality)
  const isBusinessPath = history.location.pathname.includes("/business/");
  return (
    <Wrapper>
      <LinkWrapper onClick={() => onClick()} role="button">
        <NameWrapper>{firstColumn}</NameWrapper>
        {secondColumn !== "" && (
          <PositionWrapper>{secondColumn}</PositionWrapper>
        )}
      </LinkWrapper>
      <ToolsWrapper>
        {!isBusinessPath && (
          <Button onClick={() => editAction()}>
            <Pencil />
          </Button>
        )}
        <Button onClick={() => deleteAction()}>
          <Trash />
        </Button>
      </ToolsWrapper>
    </Wrapper>
  );
};

export default BusinessListItem;
