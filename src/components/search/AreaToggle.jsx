import React from "react";
import ToggleItem from "./ToggleItem";

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

const AreaToggle = ({ areaToggles, setAreaToggles }) => {
  return (
    <div className="grid grid-cols-4 gap-[15px]">
      {taipeiDists.map((dist) => (
        <ToggleItem text={dist} isToggle={areaToggles[dist]} handleToggle={setAreaToggles} key={`${dist}-toggle-item`}/>
      ))}
    </div>
  );
};

export default AreaToggle;
