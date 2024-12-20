import React, { useEffect, useState } from "react";
import TableHeads from "./TableHeads";
import TableBody from "./TableBody";
import axios from "axios";
import { smartSearch } from "../../utils/smart-search";

const apiEndpoint =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const TableSection = ({ areaToggles, cityFilter, searchString }) => {
  const [youbikeDatas, setYoubikeDatas] = useState([]);
  const youbikeDataResult = smartSearch(
    youbikeDatas,
    searchString,
    youBikeFuseOptions
  );

  const sortByFilter = (key, isAscending = true) => {
    let compareFunction = isAscending
      ? (a, b) => a[key].toString().localeCompare(b[key].toString())
      : (a, b) => b[key].toString().localeCompare(a[key].toString());
    let sortResult = [...youbikeDatas].sort(compareFunction);
    console.log(sortResult.length);
    setYoubikeDatas(sortResult);
  };

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then((res) => {
        const filterCityData = res.data.filter(() => cityFilter === "臺北市");
        const filterData = filterCityData.filter(
          (item) => areaToggles[item.sarea.replace("區", "")]
        );
        setYoubikeDatas(filterData);
      })
      .catch((e) => console.log(e));
  }, [areaToggles, cityFilter]);

  return (
    <div className="max-w-6xl mx-auto px-[32px] lg:px-0">
      <div className="relative overflow-x-auto shadow-md rounded-[28px]">
        <table className="w-full text-sm text-left text-[#323232] text-[16px] font-normal">
          <TableHeads handleSort={sortByFilter} />
          <TableBody datas={youbikeDataResult} />
        </table>
      </div>
    </div>
  );
};

export default TableSection;

const youBikeFuseOptions = {
  keys: [
    { name: "sarea", weight: 0.3 },
    { name: "sna", weight: 0.7 },
  ],
};
