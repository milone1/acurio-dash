import React from "react";

import { Link, Outlet } from "react-router-dom";

const Countries = () => {

  return (
    <div>
      <nav className="nav-ecommerce">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png" alt="/" height={100} width={100}/>
      </nav>
      <div className="container-tags">
        <ul className="ul-tags">
          <li>
            <a href="/ecommerce">All</a>
          </li>
          <li>
            <Link to='/ecommerce/arequipa'>Arequipa</Link>
          </li>
          <li>
            <Link to='/ecommerce/barcelona'>Barcelona</Link>
          </li>
          <li>
            <a href="/">Bogota</a>
          </li>
          <li>
            <a href="/">Buenos Aires</a>
          </li>
          <li>
            <a href="/">Chicago</a>
          </li>
          <li>
            <a href="/">Ciudad de Mexico</a>
          </li>
          <li>
            <a href="/">Cuzco</a>
          </li>
          <li>
            <a href="/">Doha</a>
          </li>
          <li>
            <a href="/">Ginebra</a>
          </li>
          <li>
            <a href="/">Lima</a>
          </li>
          <li>
            <a href="/">Miami</a>
          </li>
          <li>
            <a href="/">Paris</a>
          </li>
          <li>
            <a href="/">San Francisco</a>
          </li>
          <li>
            <a href="/">Santiago de Chile</a>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Countries;