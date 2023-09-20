const TableBodyRow = ({
  city,
  dist,
  siteName,
  availableBike,
  availableSpace,
  isEven,
}) => {
  return (
    <tr
      className={`${
        isEven ? "bg-[#F6F6F6]" : "bg-white"
      } border-b text-[16px] text-[#323232]`}
    >
      <td className="md:px-10 py-4 text-center">{city}</td>
      <td className="md:px-10 py-4 text-center">{dist}</td>
      <td className="md:px-10 py-4 text-center">{siteName}</td>
      <td className="md:px-10 py-4 text-center hidden md:block">{availableBike}</td>
      <td className="md:px-10 py-4 text-center hidden md:block">{availableSpace}</td>
    </tr>
  );
};

const TableBody = ({ datas }) => {
  const tableBodyTotalNum = 6;
  return (
    <tbody>
      {datas.slice(0, tableBodyTotalNum).map((data, index) => {
        return (
          <TableBodyRow
            key={`table-body-row${index}`}
            city={"台北市"}
            dist={data.sarea}
            siteName={data.sna.replace("YouBike2.0_", "")}
            availableBike={data.tot}
            availableSpace={data.sbi}
            isEven={index % 2 === 0 ? false : true}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
