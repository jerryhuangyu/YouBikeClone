import React, { useState } from "react";
import { Dropdown, Button, Space, message } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const items = [
  {
    key: "臺北市",
    label: "臺北市",
  },
  {
    key: "新北市",
    label: "新北市",
  },
  {
    key: "臺中市",
    label: "臺中市",
  },
];

const CityDropdown = ({setCityFilter}) => {
  const [placeholderText, setPlaceholderText] = useState("選擇縣市");
  const handleDropdownClick = ({ key }) => {
    setPlaceholderText(key);
    setCityFilter(key)
    message.info(`Click on ${key}`);
  };

  return (
    <div>
      <Dropdown
        className="text-[18px] w-full bg-[#f6f6f6] font-medium px-[16px] py-[8px] rounded-[8px]"
        menu={{ items, onClick: handleDropdownClick }}
        placement="bottom"
      >
        <Space className="h-[40px]">
          <a
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-[16px]"
          >
            <Button
              className={`${
                placeholderText === "選擇縣市" ? "text-[#AEAEAE]" : "text-black"
              } border-none rounded-none p-0 m-0 h-[20px] text-[18px] flex items-center justify-center`}
            >
              {placeholderText}
            </Button>
            <CaretDownOutlined className="h-[10px] w-[10px]" />
          </a>
        </Space>
      </Dropdown>
    </div>
  );
};

export default CityDropdown;
