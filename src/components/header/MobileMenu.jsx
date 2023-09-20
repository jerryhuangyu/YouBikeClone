import { useState } from "react";
import MenuIcon from "./MenuIcon";
import SideMenu from "./SideMenu";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="md:hidden">
      <MenuIcon isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default MobileMenu;
