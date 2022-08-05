import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DiaryWrite from "./pages/DiaryWrite";
import DiaryWriteAll from "./pages/DiaryWriteAll";
import DiaryDetail from "./pages/DiaryDetail";
import DiaryComment from "./pages/DiaryComment";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";

function App() {
  return (
    <>
      <BrowserRouter>
        <Links />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diarywrite" element={<DiaryWrite />} />
          <Route path="/diarywriteall" element={<DiaryWriteAll />} />
          <Route path="/diarydetail" element={<DiaryDetail />} />
          <Route path="/diarycomment" element={<DiaryComment />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
