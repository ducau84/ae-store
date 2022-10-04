import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const Cart = () => {

  const { cart, operPrice, clearCart } = useContext( CartContext );

  if ( cart.length === 0 ) {

    return (
      <>
        < h1 > El Carrito Está Vacío</h1 >
        <Link to="/"> <button>Volver al Listado</button> </Link>
      </>
    );
  } 
  else {
    
    return (
      <>
        {cart.map( ( product, index ) => <CartItems key={`${product.title}-${index}`} product={product} /> )}
        <p>
          Total: {operPrice()};
        </p>
        <button onClick={() => clearCart()}>Vaciar el Carrito</button>
      </>
    );
  }

};

export default Cart