import SearchBar from "./SearchBar";
import CityDropdown from "./CityDropdown";
import ToggleAll from "./ToggleAll";
import AreaToggle from "./AreaToggle";
import { biking } from "../../assets";
import { useEffect, useState } from "react";

const taipeiDists = [
  "松山",
  "信義",
  "大安",
  "中山",
  "中正",
  "大同",
  "萬華",
  "文山",
  "南港",
  "內湖",
  "士林",
  "北投",
];
const newTaipeiDists = [
  "板橋",
  "三重",
  "永和",
  "中和",
  "新莊",
  "新店",
  "土城",
  "蘆洲",
  "樹林",
  "鶯歌",
  "三峽",
];
const allDists = { 臺北市: taipeiDists, 新北市: newTaipeiDists, 臺中市: [] };

const SearchSection = ({
  areaToggles,
  setAreaToggles,
  cityFilter,
  setCityFilter,
  setSearchString,
}) => {
  const [isToggleAll, setIsToggleAll] = useState(true);

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
        臺大公館校: false,
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
        臺大公館校: true,
      });
    }
  }, [isToggleAll]);

  return (
    <div className="px-[32px] pb-[32px] lg:p-0 max-w-6xl mx-auto flex justify-between">
      <div className="flex flex-col gap-[20px] pt-[20px] w-full md:w-fit">
        <h1 className="text-[24px] font-bold text-green">站點資訊</h1>
        <div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px]">
          <CityDropdown setCityFilter={setCityFilter} />
          <SearchBar setSearchString={setSearchString} />
        </div>
        <div className="flex flex-col gap-[15px]">
          <ToggleAll
            text={"全部勾選"}
            isToggle={isToggleAll}
            handleToggle={(e) => setIsToggleAll(e.target.checked)}
          />
          <AreaToggle
            areaToggles={areaToggles}
            setAreaToggles={setAreaToggles}
            dists={allDists[cityFilter]}
          />
        </div>
      </div>
      <div className="hidden md:flex h-[400px] pr-16 justify-end items-end">
        <img src={biking} alt="ubike bikibg" />
      </div>
    </div>
  );
};

export default SearchSection;
