import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ArrowBackTwoTone, ProductionQuantityLimitsTwoTone, RemoveShoppingCartTwoTone, ShoppingCartCheckoutTwoTone } from "@mui/icons-material";
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
					<ProductionQuantityLimitsTwoTone sx={{ fontSize: 250, color: '#eb077c' }} />
					<Link to="/">
						<Button color="normal"><ArrowBackTwoTone /> Volver Al Listado</Button>
					</Link>
				</CartContainer>
			</>
		);
	}
	return (

		<>
			<CartContainer>
				<h1>Mi Carrito:</h1>
				<div>
					<Button color="delete" onClick={() => clearCart()}>
						<RemoveShoppingCartTwoTone /> Vaciar el Carrito
					</Button>
					<h2>Total: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( operPrice() )}</h2>
					<Link to={'/checkout'}>
						<Button color="confirm">
							<ShoppingCartCheckoutTwoTone />Finalizar Compra
						</Button>
					</Link>
				</div>
				<Link to="/">
					<Button color="normal">
						<ArrowBackTwoTone />Seguir Comprando
					</Button>
				</Link>
				{
					cart.map( ( item, index ) => (
						<CartItems key={`${item.title}-${index}`} item={item} />
					) )
				}
			</CartContainer>
		</>
	);
};

export default Cart;
