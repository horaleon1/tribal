import { Link } from "./styled";

const LinkFooter = ({ name = "", to = "" }) => {
  return <Link to={to}>{name}</Link>;
};

export default LinkFooter;
