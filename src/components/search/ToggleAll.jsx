import { message } from "antd";

const ToggleAll = ({ text, isToggle, handleToggle }) => {
  return (
    <div className="flex items-center h-[40px] cursor-pointer">
      <input
        id={`${text}-checkbox`}
        type="checkbox"
        onChange={handleToggle}
        checked={isToggle}
        value=""
        className="custom-checkbox w-4 h-4 rounded accent-green"
      />
      <label
        htmlFor={`${text}-checkbox`}
        className="pl-[26px] sm:pl-[35px] sm:ml-1 md:ml-3 font-normal text-[18px] text-[#323232]"
      >
        {text}
      </label>
    </div>
  );
};

export default ToggleAll;
