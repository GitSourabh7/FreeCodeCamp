import React from "react";
import "../App.css";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as Magnifier } from "../Icons/Magnifier.svg";

const NavBar = () => {
  return (
    <div className="py-2 bg-black " id="nav-main">
      <div
        className="flex-fill ms-3 d-flex flex-column align-middle "
        id="nav-left"
      >
        <div className="d-flex input-container">
          <Magnifier id="magnifier" />
          <input
            className="form-control rounded-0 text-white px-1 d-flex align-middle fs-5"
            id="input"
            type="search"
            placeholder="Search 9,000+ tutorials"
            aria-label="Search"
          />
        </div>
      </div>
      <div className="flex-fill" id="nav-mid">
        <a className="navbar-brand text-white" href="/">
          <Logo className="d-flex-inline" />
        </a>
      </div>
      <div className="flex-fill" id="nav-right">
        <button
          class="btn btn-sm text-white border-white px-3 rounded-0 fs-5"
          type="button "
        >
          Menu
        </button>
        <button class="sign-in btn btn-sm mx-3 fs-5 w-25" type="button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default NavBar;
