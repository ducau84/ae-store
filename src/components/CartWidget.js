import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import IconButton from "@mui/material/IconButton";
import { lightBlue } from '@mui/material/colors';
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { CartCounter } from "../styled/CartCounter";

const CartWidget = () => {

  const { totalItems } = useContext( CartContext );

  return (
    <Tooltip title="Ver Carrito de Compras">
      <Link to={'/cart'}>
        <IconButton sx={{ color: lightBlue[ 50 ] }}>
          <ShoppingCartTwoToneIcon fontSize="large" />
          <CartCounter>
            {totalItems() || ''}
          </CartCounter>
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default CartWidget