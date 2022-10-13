import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "../styled/NavMenu";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const LeftNav = ( { open, categories } ) => {

	return (

		<Menu open={open}>
			<li>|</li>
			{categories.map( ( category, index ) => {
				return (
					<li key={`${category.name}-${index}`}>
						<NavLink to={category.route}>{category.name}</NavLink>
					</li>
				);
			} )}
			<li>|</li>
			<br />
			<li>
				<NavLink to="order_status">
					Mis Órdenes <SearchTwoToneIcon fontSize="xsmall"/> 
				</NavLink>
			</li>
			<li>|</li>
		</Menu>
	);
};

export default LeftNav;
