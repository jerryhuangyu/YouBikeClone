import { Link } from "react-router-dom";

const LinkItem = ({ title, navLink }) => {
  return (
    <Link
      to={navLink}
      className="cursor-pointer hover:text-green-dark md:hover:text-green text-white md:text-green-dark text-[18px] font-medium hover:font-bold"
    >
      {title}
    </Link>
  );
};

export default LinkItem;
