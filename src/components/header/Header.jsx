import LinkItem from "./LinkItem";
import Login from "./Login";
import Logo from "./Logo";

const linkItems = ["使用說明", "收費方式", "站點資訊", "最新消息", "活動專區"];
const navLinks = ["/instruction", "/price", "/infomation", "/news", "/campaign"];

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex justify-between items-center h-[103px]">
      <div className=" flex items-center gap-10">
        <Logo />
        {linkItems.map((link, index) => (
          <LinkItem title={link} navLink={navLinks[index]} key={`link-${index}`} />
        ))}
      </div>
      <Login />
    </div>
  );
};

export default Header;
