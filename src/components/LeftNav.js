import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./styled/NavMenu";

const LeftNav = ( { open, categories } ) => {

  return (

    <Menu open={open}>

      {
        categories.map( ( category, index ) => {
        
          return <li key={`${category.nombre}-${index}`}>
                    <NavLink to={category.route}>{category.nombre}</NavLink>
                </li>;
        } )
      }

    </Menu>

  );
};

export default LeftNav;