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
      className={`${rightPos} fixed flex flex-col justify-between p-[32px] top-[103px] w-[100%] h-[calc(100%-103px)] bg-green z-50 duration-300 ease-in-out`}
    >
      <div className="flex flex-col gap-[32px]">
        {linkItems.map((link, index) => (
          <LinkItem
            title={link}
            navLink={navLinks[index]}
            key={`link-${index}`}
          />
        ))}
      </div>
      <div className="text-green cursor-pointer bg-white rounded-[100px] w-[85px] h-[40px] flex justify-center items-center">
        Login
      </div>
    </div>
  );
};

export default SideMenu;
