import { hamburgerMenu, cross } from "../../assets";

const MenuIcon = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      {isMenuOpen ? (
        <img
          className="w-[24px] h-[24px]"
          src={cross}
          alt="close"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : (
        <img
          className="w-[24px] h-[24px]"
          src={hamburgerMenu}
          alt="menu"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </div>
  );
};

export default MenuIcon;
