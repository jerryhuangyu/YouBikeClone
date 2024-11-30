import { useState } from "react";
import { SearchSection, TableSection } from "../components";

const Home = () => {
  const [areaToggles, setAreaToggles] = useState({
    松山: true,
    信義: true,
    大安: true,
    中山: true,
    中正: true,
    大同: true,
    萬華: true,
    文山: true,
    南港: true,
    內湖: true,
    士林: true,
    北投: true,
    臺大公館校: true,
  });
  const [cityFilter, setCityFilter] = useState("臺北市");
  const [searchString, setSearchString] = useState("");

  return (
    <>
      <SearchSection
        areaToggles={areaToggles}
        setAreaToggles={setAreaToggles}
        cityFilter={cityFilter}
        setCityFilter={setCityFilter}
        setSearchString={setSearchString}
      />
      <TableSection
        areaToggles={areaToggles}
        cityFilter={cityFilter}
        searchString={searchString}
      />
    </>
  );
};

export default Home;
