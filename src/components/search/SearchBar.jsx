import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input, Space } from "antd";
import { useRef } from "react";

const options = [
  {
    value: "捷運科技大樓站",
  },
  {
    value: "復興南路二段273號前",
  },
  {
    value: "國北教大實小東側門",
  },
];

const SearchBar = () => {
  const autoCompleteRef = useRef(null);

  return (
    <div className="bg-[#f6f6f6] rounded-[8px] relative">
      <AutoComplete
        placeholder="尋找站點"
        className="w-[277px] h-[40px] ml-1 bg-[#f6f6f6] rounded-[8px] peer-focus"
        options={options}
        bordered={false}
        ref={autoCompleteRef}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <SearchOutlined
        className="absolute top-3 right-[16px] peer"
        onClick={() => autoCompleteRef.current.focus()}
      />
    </div>
  );
};

export default SearchBar;
