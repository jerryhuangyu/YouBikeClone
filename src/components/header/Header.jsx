import LinkItem from "./LinkItem";
import Login from "./Login";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const linkItems = ["使用說明", "收費方式", "站點資訊", "最新消息", "活動專區"];
const navLinks = [
  "/instruction",
  "/price",
  "/infomation",
  "/news",
  "/campaign",
];

const Header = () => {
  return (
    <div className="max-w-6xl md:px-0 px-[32px] mx-auto flex justify-between items-center fixed top-0 w-full bg-white z-50 border-b-[1px] border-[#EBEBEB] h-[103px]">
      <div className="flex items-center gap-10">
        <Logo />
        <div className="hidden md:flex gap-10">
          {linkItems.map((link, index) => (
            <LinkItem
              title={link}
              navLink={navLinks[index]}
              key={`link-${index}`}
            />
          ))}
        </div>
      </div>
      <Login />
      <MobileMenu />
    </div>
  );
};

export default Header;
