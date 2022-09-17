import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const CartWidget = () => {
  return (
    <Tooltip title="Ver Carrito de Compras">
      <IconButton color="inherit">
        <ShoppingCartTwoToneIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default CartWidget