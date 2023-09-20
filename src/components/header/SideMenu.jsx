import LinkItem from "./LinkItem";

const linkItems = ["使用說明", "收費方式", "站點資訊", "最新消息", "活動專區"];
const navLinks = [
  "/instruction",
  "/price",
  "/infomation",
  "/news",
  "/campaign",
];

const SideMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const rightPos = isMenuOpen ? "left-0" : "left-[100%]";
  return (
    <div
      onClick={() => setIsMenuOpen(false)}
      className={`${rightPos} fixed flex flex-col p-[32px] gap-[32px] top-[103px] w-[1800px] h-[100%] bg-green z-50 duration-300 ease-in-out`}
    >
      {linkItems.map((link, index) => (
        <LinkItem
          title={link}
          navLink={navLinks[index]}
          key={`link-${index}`}
        />
      ))}
    </div>
  );
};

export default SideMenu;
