import { message } from "antd";

const ToggleItem = ({ text, isToggle, handleToggle }) => {
  return (
    <div className="flex items-center h-[40px] cursor-pointer">
      <input
        id={`${text}-checkbox`}
        type="checkbox"
        checked={isToggle}
        onChange={() => {handleToggle(prev => {
          let updateToggles = {...prev}
          updateToggles[text] = !prev[text]
          return updateToggles
        })}}
        value=""
        className="custom-checkbox w-4 h-4 rounded accent-green"
      />
      <label
        htmlFor={`${text}-checkbox`}
        className="pl-[35px] sm:ml-1 md:ml-3 font-normal text-[18px] text-[#323232]"
      >
        {text + "區"}
      </label>
    </div>
  );
};

export default ToggleItem;
