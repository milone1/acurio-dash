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

//* import components to dashboard
import Dashboard from "../Layouts/Dashboard";
import Clients from "../pages/dashboard/Clients";
import Profile from "../pages/dashboard/Profile";
import Sales from "../pages/dashboard/Sales";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Countries />}>
            <Route path="ecommerce" element={<All />} />
            <Route path="/ecommerce/arequipa" element={<CardBarcelona />} />
            <Route path="/ecommerce/barcelona" element={<CardArequipa />} />
        </Route>

        <Route  element={<Dashboard />}>
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/dashboard/ventas" element={<Sales />} />
            <Route path="/dashboard/clientes" element={<Clients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;