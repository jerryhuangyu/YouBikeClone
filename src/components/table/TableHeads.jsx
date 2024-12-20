import React, { useEffect, useState } from "react";
import { downArrow, twoWayArrow, upArrow } from "../../assets";

const SortArrowIcon = ({ iconIndex }) => {
  const icon = [twoWayArrow, upArrow, downArrow];
  return (
    <img src={icon[iconIndex]} alt="sorting icon" className="pb-0.5 w-4 h-4" />
  );
};

const TableHead = ({
  headerText,
  handleClick,
  currentOnClick,
  className,
  needSortIcon = true,
}) => {
  const [countOnClick, setCountOnClick] = useState(0);

  useEffect(() => {
    headerText !== currentOnClick ? setCountOnClick(0) : "";
  }, [currentOnClick]);

  return (
    <th scope="col" className={`${className} md:px-10 py-3`}>
      <div
        className="flex items-end justify-center cursor-pointer"
        onClick={() => {
          handleClick();
          setCountOnClick(
            (prev) => (prev = prev === 0 ? 1 : prev === 1 ? 2 : 1)
          );
        }}
      >
        <p>{headerText}</p>
        {needSortIcon ? <SortArrowIcon iconIndex={countOnClick} /> : ""}
      </div>
    </th>
  );
};

const TableHeads = ({ handleSort }) => {
  const [isAscending, setIsAscending] = useState({
    city: true,
    sarea: true,
    sna: true,
    available_rent_bikes: true,
    available_return_bikes: true,
  });
  const [currentOnClick, setCurrenOnClick] = useState("");

  return (
    <thead className="text-[18px] font-medium h-[66px] text-white uppercase bg-green">
      <tr>
        <TableHead
          headerText="縣市"
          handleClick={() => {}}
          needSortIcon={false}
        />
        <TableHead
          headerText="區域"
          currentOnClick={currentOnClick}
          handleClick={() => {
            handleSort("sarea", isAscending.sarea);
            setIsAscending((prev) => ({ ...prev, sarea: !prev.sarea }));
            setCurrenOnClick("區域");
          }}
        />
        <TableHead
          headerText="站點名稱"
          currentOnClick={currentOnClick}
          handleClick={() => {
            handleSort("sna", isAscending.sna);
            setIsAscending((prev) => ({ ...prev, sna: !prev.sna }));
            setCurrenOnClick("站點名稱");
          }}
        />
        <TableHead
          className="hidden md:table-cell"
          headerText="可借車輛"
          currentOnClick={currentOnClick}
          handleClick={() => {
            handleSort("available_rent_bikes", isAscending.available_rent_bikes);
            setIsAscending((prev) => ({ ...prev, available_rent_bikes: !prev.available_rent_bikes }));
            setCurrenOnClick("可借車輛");
          }}
        />
        <TableHead
          className="hidden md:table-cell"
          headerText="可還空位"
          currentOnClick={currentOnClick}
          handleClick={() => {
            handleSort("available_return_bikes", isAscending.available_return_bikes);
            setIsAscending((prev) => ({ ...prev, available_return_bikes: !prev.available_return_bikes }));
            setCurrenOnClick("可還空位");
          }}
        />
      </tr>
    </thead>
  );
};

export default TableHeads;
