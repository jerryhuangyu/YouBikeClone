import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Border, Header } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full pb-10">
        <Header />
        <Border />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instruction" element={<div className="max-w-6xl mx-auto pt-10 flex justify-center">使用說明</div>} />
            <Route path="/price" element={<div className="max-w-6xl mx-auto pt-10 flex justify-center">收費方式</div>} />
            <Route path="/infomation" element={<div className="max-w-6xl mx-auto pt-10 flex justify-center">站點資訊</div>} />
            <Route path="/news" element={<div className="max-w-6xl mx-auto pt-10 flex justify-center">最新消息</div>} />
            <Route path="/campaign" element={<div className="max-w-6xl mx-auto pt-10 flex justify-center">活動專區</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
