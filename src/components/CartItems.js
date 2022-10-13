
import React, { useContext } from "react";
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { CartContext } from "../context/CartContext.js";
import { CartItemContainer } from "../styled/CartItemContainer.js";
import { Button } from "../styled/Button.js";

const CartItems = ( { product } ) => {

  const { removeItem } = useContext( CartContext );

  return (
    <CartItemContainer>
      <img src={product.img} alt="cover" />
      <article>
        <h3>{product.title}</h3>
        <h4>{product.autor}</h4>
        <p>Cantidad: {product.qty}</p>
        <p>Precio: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( product.price )}</p>
        <p>Subtotal: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( product.qty * product.price )}</p>
      </article>
      <Button color="delete" onClick={() => removeItem( product.id )}><RemoveShoppingCartTwoToneIcon fontSize="small" />Eliminar</Button>
    </CartItemContainer>
  );
};
export default CartItems