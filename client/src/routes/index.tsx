import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

export function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
