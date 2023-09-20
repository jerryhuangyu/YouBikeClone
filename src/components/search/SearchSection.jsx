import SearchBar from "./SearchBar";
import CityDropdown from "./CityDropdown";
import ToggleAll from "./ToggleAll";
import AreaToggle from "./AreaToggle";
import { biking } from "../../assets";
import { useEffect, useState } from "react";

const SearchSection = () => {
  const [isToggleAll, setIsToggleAll] = useState(true);
  const [areaToggles, setAreaToggles] = useState({
    松山: true,
    信義: true,
    大安: true,
    中山: true,
    中正: true,
    大同: true,
    萬華: true,
    文山: true,
    南港: true,
    內湖: true,
    士林: true,
    北投: true,
  });

  useEffect(() => {
    if (!isToggleAll) {
      setAreaToggles({
        松山: false,
        信義: false,
        大安: false,
        中山: false,
        中正: false,
        大同: false,
        萬華: false,
        文山: false,
        南港: false,
        內湖: false,
        士林: false,
        北投: false,
      });
    } else {
      setAreaToggles({
        松山: true,
        信義: true,
        大安: true,
        中山: true,
        中正: true,
        大同: true,
        萬華: true,
        文山: true,
        南港: true,
        內湖: true,
        士林: true,
        北投: true,
      });
    }
  }, [isToggleAll]);

  return (
    <div className="max-w-6xl mx-auto flex justify-between">
      <div className="flex flex-col gap-[20px] pt-[20px]">
        <h1 className="text-[24px] font-bold text-green">站點資訊</h1>
        <div className="flex flex-row gap-[16px]">
          <CityDropdown />
          <SearchBar />
        </div>
        <div className="flex flex-col gap-[15px]">
          <ToggleAll
            text={"全部勾選"}
            isToggle={isToggleAll}
            handleToggle={(e) => setIsToggleAll(e.target.checked)}
          />
          <AreaToggle areaToggles={areaToggles} setAreaToggles={setAreaToggles} />
        </div>
      </div>
      <div className="h-[400px] flex pr-16 justify-end items-end">
        <img src={biking} alt="ubike bikibg" />
      </div>
    </div>
  );
};

export default SearchSection;
