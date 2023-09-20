import React from "react";
import ToggleItem from "./ToggleItem";

const AreaToggle = ({ areaToggles, setAreaToggles, dists }) => {
  return (
    <div className="grid grid-cols-4 gap-[15px]">
      {dists.map((dist) => (
        <ToggleItem text={dist} isToggle={areaToggles[dist]} handleToggle={setAreaToggles} key={`${dist}-toggle-item`}/>
      ))}
    </div>
  );
};

export default AreaToggle;
