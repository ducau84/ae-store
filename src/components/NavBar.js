import React from "react";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget.js"
import styled from "styled-components";
import Burger from "./Burger";


const Navbar = ( { categories } ) => {
    return (
        <Nav>
            <LogoContainer>
                <Logo src={logo} alt="Logo" />
                <Title>A.E. Store</Title>
            </LogoContainer>
            <Burger categories={categories} />
            <CartWidget />
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: #0d2538;
  color: white;
  font-family: "Fredoka One";
  text-transform: uppercase;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`

const Logo = styled.img`
  width: 80%;
  height: auto;
  max-width: 110px;
  @media (max-width: 768px) {
    max-width: 65px;
  }
`

const Title = styled.h1`
  margin-left: 10px;
  font-size: 2rem;
  font-weight: 400;
`
