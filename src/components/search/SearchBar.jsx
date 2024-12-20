import { SearchOutlined as SearchOutlinedIcon } from "@ant-design/icons";
import { AutoComplete, Input, Space } from "antd";
import { useRef, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

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

const SearchBar = ({ setSearchString }) => {
  const autoCompleteRef = useRef(null);
  const [input, setInput] = useState("");
  useDebounce(input, 1000, () => setSearchString(input));

  return (
    <div className="bg-[#f6f6f6] w-full rounded-[8px] relative">
      <AutoComplete
        placeholder="尋找站點"
        className="w-[277px] h-[40px] ml-1 bg-[#f6f6f6] rounded-[8px] peer-focus"
        options={options}
        variant="borderless"
        ref={autoCompleteRef}
        onChange={(value) => setInput(value)}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <SearchOutlinedIcon
        className="absolute top-3 right-[16px] peer"
        onClick={() => autoCompleteRef.current.focus()}
      />
    </div>
  );
};

export default SearchBar;
