
import React, { useContext } from "react";
import RemoveShoppingCartTwoToneIcon from '@mui/icons-material/RemoveShoppingCartTwoTone';
import { CartContext } from "../context/CartContext.js";
import { CartItemContainer } from "../styled/CartItemContainer.js";
import { ButtonDetails } from "../styled/ButtonDetails.js";

const CartItems = ( { product } ) => {

    const { removeItem } = useContext( CartContext );

    return (
        <CartItemContainer>
            <img src={product.img} alt="cover" />
            <div>
                <h2>{product.title}</h2>
                <p>Cantidad: {product.qty}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: {product.qty * product.price}</p>
            </div>
            <ButtonDetails onClick={() => removeItem( product.id )}>
                <RemoveShoppingCartTwoToneIcon fontSize="small"/>
                Eliminar del Carrito
            </ButtonDetails>
        </CartItemContainer>
    );
};
export default CartItems