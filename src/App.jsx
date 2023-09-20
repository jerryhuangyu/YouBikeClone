import { useState } from "react";
import { Border, Header, SearchSection, TableSection } from "./components";

function App() {
  return (
    <div className="w-full pb-10">
      <Header />
      <Border />
      <SearchSection />
      <TableSection />
    </div>
  );
}

export default App;
