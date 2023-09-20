import { message } from "antd";

const ToggleItem = ({ text }) => {
  return (
    <div className="flex items-center h-[40px]">
      <input
        id={`${text}-checkbox`}
        type="checkbox"
        value=""
        className="custom-checkbox w-4 h-4 rounded accent-green"
      />
      <label
        htmlFor={`${text}-checkbox`}
        className="ml-3 font-normal text-[18px] text-[#323232]"
      >
        {text}
      </label>
    </div>
  );
};

export default ToggleItem;
