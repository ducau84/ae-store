import { createContext, useState } from "react";

export const CartContext = createContext( [] );

const CartProvider = ( { children } ) => {

  const [ cart, setCart ] = useState( [] );

  console.log(cart)

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

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
