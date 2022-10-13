import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";
import { db } from "../firebase/firebase.js";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { FallingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { Button } from "../styled/Button.js";
import { CheckOutContainer } from "../styled/CheckOutContainer.js";

const CartCheckOut = () => {

  const [ uploadingOrder, setUlOrder ] = useState( false );
  const [ orderPlaced, setOrderPlaced ] = useState( false );
  const [ orderId, setOrderId ] = useState();
  const { cart, clearCart, operPrice } = useContext( CartContext );

  const [ customerData, setCustomerData ] = useState( {
    name: "",
    email: "",
    phone: "",
    payment: "",
  } );

  const handleChange = ( e ) => {
    setCustomerData( {
      ...customerData,
      [ e.target.name ]: e.target.value,
    } );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    placeOrder();
  };

  const updateStock = ( item ) => {
    const newStock = doc( db, "products", item.id );
    updateDoc( newStock, { stock: ( item.stock - item.qty ) } )
  };

  const placeOrder = async () => {
    setUlOrder( true );

    try {
      const orderData = {
        customerInfo: {
          name: customerData.name,
          email: customerData.email,
          phone: customerData.phone,
          payment: customerData.payment,
        },
        items: cart.map( item => ( { id: item.id, title: item.title, price: item.price, qty: item.qty } ) ),
        total: operPrice(),
        date: serverTimestamp(),
      };

      const salesCollection = collection( db, 'store_sales' );
      const newOrder = await addDoc( salesCollection, { orderData } );
      setOrderId( newOrder.id );
    }
    catch ( err ) {
      console.error( err );
      toast.error( "Ocurrió un error cargando los datos de la compra" );

    }
    finally {
      setUlOrder( false );
      setOrderPlaced( true );
      cart.forEach( item => {
        updateStock( item );
      } );
      clearCart();
    }
  };

  if ( uploadingOrder ) {
    return (
      <CheckOutContainer>
        <h1>Estamos Cargando tu compra!</h1>
        <FallingLines color="#faf018" width="300" visible={true} />
      </CheckOutContainer>
    );
  }

  if ( orderPlaced ) {
    return (
      <CheckOutContainer>
        <h1>¡Muchas gracias por tu Compra!</h1>
        <article>
          <p>{`${customerData.name}`}, tu código de orden es:
            <span>{`${orderId}`}</span></p>
          <p>¡En breve recibiras un correo electrónico para visualizar el seguimiento de tu compra!.</p>
        </article>
        <Link to="/">
          <Button color="normal">
            <ArrowBackTwoToneIcon />Volver al Listado
          </Button>
        </Link>
      </CheckOutContainer>
    )
  }

  return (
    <CheckOutContainer>
      <h1>Por favor ingresa tus datos:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre y Apellido" onChange={handleChange} value={customerData.name} required />
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} value={customerData.email} required />
        <input type="tel" name="phone" placeholder="Teléfono (10 dígitos)" pattern="[0-9]{10}" onChange={handleChange} value={customerData.phone} required />
        <h4>Total a abonar: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( operPrice() )}</h4>
        <select name="payment" onChange={handleChange} value={customerData.payment} required>
          <option selected disabled value="">Selecciona la forma de pago</option>
          <option value="transf">Transferencia Bancaria</option>
          <option value="tarjcred">Tarjeta de Credito</option>
          <option value="tarjdeb">Tarjeta de Debito</option>
          <option value="tarjdeb">Rapipago / Pago Fácil</option>
        </select>
        <Button color="confirm">Confirmar Compra <CheckTwoToneIcon /></Button>
      </form>
      <Link to="/cart">
        <Button color="delete">Volver Al Carrito <ShoppingCartTwoToneIcon /></Button>
      </Link>
    </CheckOutContainer>
  );
};

export default CartCheckOut