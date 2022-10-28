
import React, { useContext } from "react";
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { CartContext } from "../context/CartContext.js";
import { CartItemContainer } from "../styled/CartItemContainer.js";
import { Button } from "../styled/Button.js";

const CartItems = ( { item } ) => {

	const { removeItem } = useContext( CartContext );

	return (

		<CartItemContainer>
			<img src={item.img} alt="cover" />
			<article>
				<h3>{item.title}</h3>
				<h4>{item.autor}</h4>
				<p>Cantidad: {item.qty}</p>
				<p>Precio: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( item.price )}</p>
				<p>Subtotal: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( item.qty * item.price )}</p>
			</article>
			<Button color="delete" onClick={() => removeItem( item.id )}>
				<RemoveShoppingCartTwoToneIcon fontSize="small" />Eliminar
			</Button>
		</CartItemContainer>
	);
};
export default CartItems