import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext( [] );

const CartProvider = ( { children } ) => {

	const [ cart, setCart ] = useLocalStorage("cart", [] );

	const isInCart = ( id ) => cart.some( ( producto ) => producto.id === id );

	const addItem = ( product, qty ) => {

		if ( isInCart( product.id ) ) {

			const newCart = [ ...cart ];

			newCart.map( ( item ) => {
				return item.id === product.id
					? { ...item, qty: item.qty += qty }
					: product;
			} );

			setCart( newCart );

		} else {

			setCart( [ ...cart, { ...product, qty } ] );

		}
	};

	const clearCart = () => setCart( [] );

	const removeItem = ( id ) => setCart( cart.filter( ( product ) => product.id !== id ) );

	const totalItems = () => cart.reduce( ( quantity, product ) => quantity + product.qty, 0 );

	const operPrice = () => {
		return cart.reduce( ( total, product ) => total + product.qty * product.price, 0 );
	};

	return (

		<CartContext.Provider value={
			{
				cart,
				addItem,
				removeItem,
				clearCart,
				isInCart,
				totalItems,
				operPrice
			}
		}>
			{children}
		</CartContext.Provider>

	);
};

export default CartProvider;
