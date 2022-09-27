import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget.js";
import Burger from "./Burger";
import { Nav } from "./styled/Nav";
import { LogoContainer, Logo } from "./styled/Logo";
import { Title } from "./styled/NavTitle";

const Navbar = ( { categories } ) => {

  return (
    <Nav>
      <LogoContainer>

        <Link to={"/"}>
          <Logo src={logo} alt="Logo" />
        </Link>

        <Link to={"/"}>
          <Title>A.E. Store</Title>
        </Link>

      </LogoContainer>
      <Burger categories={categories} />
      <CartWidget />
    </Nav>
  );
};

export default Navbar;
