import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget.js";
import "./NavBar.css"

const NavBar = ({categories}) => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1>A.E. Store</h1>
        </div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" className="hamburger"/>
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          <div className="menu">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <a key={category.id} href="#"> {category.nombre} </a>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="logoMobile">
          <img src={logo} alt="Logo" className="logo" />
          <h1>A.E. Store</h1>
        </div>
        <CartWidget />
      </nav>
    </>
  );
};






export default NavBar;
