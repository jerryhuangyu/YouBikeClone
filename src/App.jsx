import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, SpaceForHeader } from "./components";
import { Home, Other } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full pb-10">
        <Header />
        <SpaceForHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instruction" element={<Other text={"使用說明"} />} />
          <Route path="/price" element={<Other text={"收費方式"} />} />
          <Route path="/information" element={<Other text={"站點資訊"} />} />
          <Route path="/news" element={<Other text={"最新消息"} />} />
          <Route path="/campaign" element={<Other text={"活動專區"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
