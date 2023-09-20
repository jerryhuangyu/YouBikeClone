import { Link } from "react-router-dom";

const LinkItem = ({ title, navLink }) => {
  return (
    <Link to={navLink} className="cursor-pointer hover:text-green text-green-dark text-[18px] font-medium hover:font-bold">
      {title}
    </Link>
  );
};

export default LinkItem;
