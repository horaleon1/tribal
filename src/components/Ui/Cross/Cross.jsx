import { Icon } from "./styled";

const Cross = ({ onClick = () => false }) => {
  return <Icon role="button" onClick={() => onClick()} />;
};

export default Cross;
