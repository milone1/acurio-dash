import React from "react";
//* import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//* import Login
import Login from "../pages/Login";

//* import Countries
import Countries from "../Layouts/Countries";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/countries" element={<Countries />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;