import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import HomePage from "../pages/home-page";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<CatalogPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
