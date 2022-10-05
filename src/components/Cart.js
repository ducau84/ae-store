import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import { RemoveShoppingCartTwoTone } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import CartItems from "./CartItems";
import { CartContainer } from "../styled/CartContainer";
import { Button } from "../styled/Button";

const Cart = () => {

  const { cart, operPrice, clearCart } = useContext( CartContext );

  if ( cart.length === 0 ) {

    return (
      <>
        <CartContainer>
          <h1>¡Tu Carrito Está Vacío!</h1>
          <ProductionQuantityLimitsTwoToneIcon sx={{fontSize: 250, color: '#eb077c'}}/>
          <Link to="/">
            <Button>
              <ArrowBackTwoToneIcon />
              Volver Al Listado
            </Button>
          </Link>
        </CartContainer>
      </>
    );
  } 
  else {

    return (
      <>
        <CartContainer>
          <h1>Mi Carrito:</h1>
          <div>
            <Tooltip title="Vaciar El Carrito">
              <Button delete onClick={() => clearCart()}>
                <RemoveShoppingCartTwoTone /> Vaciar el Carrito
              </Button>
            </Tooltip>
            <h2>Total: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( operPrice() )}</h2>
          </div>
          {
            cart.map( ( product, index ) => (
            <CartItems key={`${product.title}-${index}`} product={product} />
          ) )
          }
        </CartContainer>
      </>
    );
  }
};

export default Cart;
