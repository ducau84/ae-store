import React from "react";
import IconButton from "@mui/material/IconButton";
import { lightBlue } from '@mui/material/colors';
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Tooltip title="Ver Carrito de Compras">
      <Link to={'/cart'}>
      <IconButton sx={{ color: lightBlue[50] }}>
        <ShoppingCartTwoToneIcon fontSize="large" />
      </IconButton>
      </Link>
    </Tooltip>
  );
};

export default CartWidget