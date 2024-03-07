import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/SVGs/logo.svg";

const Navigations = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/" className="link">
              <img src={logo} alt="logo" srcset="" />
            </NavLink>
          </div>

          <div className="navlinks">
            <NavLink to="login" className="link">      Sign in      </NavLink>
            <NavLink to="/newstory" className="link">   Write      </NavLink>
            <NavLink to="signup" className="link btn">    Get started   </NavLink>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigations;
