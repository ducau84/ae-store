import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext.js";
import { db } from "../firebase/firebase.js";
import { addDoc, collection, doc, documentId, getDocs, serverTimestamp, updateDoc, where, } from "firebase/firestore";
import { FallingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Button } from "../styled/Button.js";
import { CheckOutContainer } from "../styled/CheckOutContainer.js";
import CheckOutForm from "./CheckOutForm.js";

const CartCheckOut = () => {
	const [ uploadingOrder, setUlOrder ] = useState( false );
	const [ orderPlaced, setOrderPlaced ] = useState( false );
	const [ orderId, setOrderId ] = useState();
	const { cart, clearCart, operPrice } = useContext( CartContext );
	const [ customerData, setCustomerData ] = useState( {
		name: "",
		email: "",
		email2: "",
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
		operPrice() === 0
			? toast.error( "Tu carrito no puede estar vacío al confirmar la compra", {
				theme: "colored",
			} )
			: customerData.email !== customerData.email2
				? toast.error( "¡Las direcciones de correo electrónico no coinciden!", {
					theme: "dark",
				} )
				: checkStock( cart );
	};

	const orderDetail = {
		items: cart.map( ( item ) => ( {
			title: item.title,
			price: item.price,
			qty: item.qty,
			id: item.id
		} ) ),
		total: operPrice(),
	}

	const checkStock = async ( cart ) => {
		const ids = cart.map( ( item ) => item.id );
		const prodCollection = collection( db, "products" );
		const dbProducts = await getDocs(
			prodCollection,
			where( documentId(), "in", ids )
		);
		const soldOutProducts = [];

		dbProducts.forEach( ( product ) => {
			const productData = product.data();
			const dbStock = productData.stock;
			const itemsInCart = cart.find( ( item ) => item.id === product.id );
			const itemQty = itemsInCart?.qty;
			if ( dbStock < itemQty ) {
				soldOutProducts.push( productData );
			}
		} );

		soldOutProducts.length !== 0
			? soldOutProducts.forEach( ( product ) => {
				toast.error(
					`No hay stock suficiente de ${product.title}, por favor verifique el carrito e intente de nuevo`,
					{ theme: "dark" }
				);
			} )
			: placeOrder();
	};

	const updateStock = ( product ) => {
		const newStock = doc( db, "products", product.id );
		updateDoc( newStock, { stock: product.stock - product.qty } );
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
				...orderDetail,
				date: serverTimestamp(),
			};
			const salesCollection = collection( db, "store_sales" );
			const newOrder = await addDoc( salesCollection, { orderData } );
			setOrderId( newOrder.id );
		} catch ( err ) {
			console.error( err );
			toast.error( "Ocurrió un error cargando los datos de la compra" );
		} finally {
			setUlOrder( false );
			setOrderPlaced( true );
			cart.forEach( ( item ) => {
				updateStock( item );
			} );
			clearCart();
		}
	};

	if ( uploadingOrder ) {
		return (
			<CheckOutContainer>
				<div>
					<h1>Estamos Cargando tu compra!</h1>
					<FallingLines color="#faf018" width="450" visible={true} />
				</div>
			</CheckOutContainer>
		);
	}

	if ( orderPlaced ) {
		return (
			<CheckOutContainer>
				<h1>¡Muchas gracias por tu Compra!</h1>
				<article>
					<p>{`${customerData.name}`}, tu código de orden es: <span>{`${orderId}`}</span></p>
					<p>¡Puedes dirigirte a la sección "Mis Órdenes" para verificar el estado de tu compra!.</p>
				</article>
				<Link to="/">
					<Button color="normal">
						<ArrowBackTwoToneIcon /> Volver al Listado
					</Button>
				</Link>
			</CheckOutContainer>
		);
	}

	return (
		<CheckOutForm handleSubmit={handleSubmit} handleChange={handleChange} customerData={customerData} order={orderDetail} />
	);
};

export default CartCheckOut;