import React from "react";
import ToggleItem from "./ToggleItem";

const AreaToggle = ({ areaToggles, setAreaToggles, dists }) => {
  return (
    <div className="grid max-w-[460px] grid-cols-3 md:grid-cols-4 gap-[16px]">
      {dists.map((dist) => (
        <ToggleItem text={dist} isToggle={areaToggles[dist]} handleToggle={setAreaToggles} key={`${dist}-toggle-item`}/>
      ))}
    </div>
  );
};

export default AreaToggle;
