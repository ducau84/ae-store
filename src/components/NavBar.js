import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import CartWidget from "./CartWidget.js";
import Burger from "./Burger";
import { Nav } from "../styled/Nav";
import { LogoContainer } from "../styled/Logo";
import { Title } from "../styled/NavTitle";

const NavBar = ( { categories } ) => {

	return (
		
		<Nav>
			<LogoContainer>
				<Link to={"/"}>
					<img src={logo} alt="Logo" />
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

export default NavBar;