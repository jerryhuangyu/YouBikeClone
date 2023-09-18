import { useState } from "react";
import { Border, Header, SearchSection } from "./components";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Border />
      <SearchSection />
    </div>
  );
}

export default App;
