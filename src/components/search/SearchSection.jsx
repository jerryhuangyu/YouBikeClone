import SearchBar from "./SearchBar";
import CityDropdown from "./CityDropdown";
import ToggleItem from "./ToggleItem";
import AreaToggle from "./AreaToggle";
import { biking } from "../../assets";

const SearchSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex justify-between">
      <div className="flex flex-col gap-[20px] pt-[20px]">
        <h1 className="text-[24px] font-bold text-green">站點資訊</h1>
        <div className="flex flex-row gap-[16px]">
          <CityDropdown />
          <SearchBar />
        </div>
        <div className="flex flex-col gap-[15px]">
          <ToggleItem text={"全部勾選"} />
          <AreaToggle />
        </div>
      </div>
      <div className="h-[400px] flex pr-16 justify-end items-end">
        <img src={biking} alt="ubike bikibg" />
      </div>
    </div>
  );
};

export default SearchSection;
