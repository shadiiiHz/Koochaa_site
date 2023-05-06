import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Categories from "./components/Categories";
import CategoryList from "./pages/CategoryList";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/categories/:type" element={<CategoryList />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
