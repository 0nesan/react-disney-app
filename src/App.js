import "./App.css";
import Nav from "./components/Nav";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { Routes, Route, Outlet } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* 제일 처음 보여지는 페이지는 로그인 페이지 */}
        <Route index element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path=":movieId" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
