import React from "react";
//* import react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//* import Login
import Login from "../pages/Login";

//* import Countries
import Countries from "../Layouts/Countries";
import All from "../pages/countries/All";
import CardArequipa from "../pages/countries/Arequipa";
import CardBarcelona from "../pages/countries/Barcelona";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Countries />}>
            <Route path="ecommerce" element={<All />} />
            <Route path="/ecommerce/arequipa" element={<CardBarcelona />} />
            <Route path="/ecommerce/barcelona" element={<CardArequipa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;