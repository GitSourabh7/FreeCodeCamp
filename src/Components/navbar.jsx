import React from "react";
import "../App.css";
const NavBar = () => {
  return (
    <div className="py-2 bg-dark " id="nav-main">
      <div className="flex-fill ms-3 pe-3" id="nav-left">
        <input
          className="form-control me-2 rounded-0 bg-secondary border-dark text-white"
          type="search"
          placeholder="Search 9,000+ tutorials"
          aria-label="Search"
        />
      </div>
      <div className="flex-fill " id="nav-mid">
        <a className="align-middle navbar-brand text-white " href="/">
          Navbar
        </a>
      </div>
      <div className="flex-fill" id="nav-right">
        <button
          class="btn btn-sm text-white border-white rounded-0 fs-5"
          type="button "
        >
          Menu
        </button>
        <button class="btn btn-sm btn-outline-secondary mx-2" type="button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
