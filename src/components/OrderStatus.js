import React, { useState } from "react";
import { CheckOutContainer } from "../styled/CheckOutContainer";
import { Button } from "../styled/Button";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
import { toast } from "react-toastify";
import OrderDet from "./OrderDet";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { FallingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { ArrowBackTwoTone } from "@mui/icons-material";
import { OrdersDet } from "../styled/Orders";

const OrderStatus = () => {

	const [ orderData, setOrderData ] = useState( {
		email: "",
	} );

	const [ orderDetail, setOrderDetail ] = useState( [] );

	const [ searchingOrder, setSearchingOrder ] = useState( false );

	const handleChange = ( e ) => {

		setOrderData( {
			...orderData,
			[ e.target.name ]: e.target.value,
		} );
	};

	const handleSubmit = ( e ) => {

		e.preventDefault();
		getOrders();
	};

	const reloadOrdersPage = () => {

		setOrderDetail( [] );
	};

	const getOrders = async () => {

		const salesCollection = collection( db, "store_sales" )

		const queryOrd = query(
			salesCollection,
			where( "orderData.customerInfo.email", "==", `${orderData.email}` ),
			orderBy( 'orderData.date', 'desc' )
		);

		try {
			setSearchingOrder( true );
			const res = await getDocs( queryOrd );
			const data = res.docs.map( ( order ) => {
				return {
					...order.data(),
					id: order.id,
				};
			} );
			data.length === 0
				? toast.warning(
					"No se encontró ninguna orden realizada desde esta dirección de e-mail", { theme: "colored" }
				)
				: setOrderDetail( data ); console.log( data )
		}
		catch ( err ) {
			console.error( err );
			toast.error( "Ocurrió un error comunicandose con la base de datos", {
				theme: "colored",
			} );
		}
		finally {
			setSearchingOrder( false );
		}
	};

	if ( searchingOrder ) {
		return (

			<CheckOutContainer>
				<div>
					<h1>¡Estamos Buscando tus órdenes!</h1>
					<FallingLines color="#047307" width="320" visible={true} />
				</div>
			</CheckOutContainer>
		);
	}

	return (

		<>
			<CheckOutContainer>
				<h1>Verificar El Estado de mis órdenes</h1>
				{
					orderDetail.length === 0
						?
						<>
							<p>Desde aqui podrás verificar tus órdenes, sólo completando la dirección de e-mail que utilizaste al momento de realizarla, las mismas se mostrarán ordenadas por fecha de forma descendente.</p>
							<form onSubmit={handleSubmit}>
								<label htmlFor="email">Ingrese su e-mail:</label>
								<div>
									<input
										type="email"
										name="email"
										placeholder="nombre@dominio.com"
										onChange={handleChange}
										value={orderData.email}
										required
									/>
									<Button color="confirm" type="submit">
										<SearchTwoToneIcon fontSize="small" /> Buscar
									</Button>
								</div>
							</form>
							<Link to="/">
								<Button color="normal">
									<ArrowBackTwoToneIcon />Volver al Listado
								</Button>
							</Link>
						</>
						:
						<OrdersDet>
							<p>A continuación se enumeran las distintas órdenes realizadas desde	el e-mail ingresado:</p>
							<div>
								<Button color="confirm" onClick={() => reloadOrdersPage()}>
									<SearchTwoToneIcon />
									Otra Consulta
								</Button>
								<Link to="/">
									<Button color="normal">
										<ArrowBackTwoTone />
										Volver Al Listado
									</Button>
								</Link>
							</div>
							{orderDetail.map( ( order, index ) => (
								<OrderDet key={`${order.id}-${index}`} order={order.orderData} id={order.id} />
							) )}
						</OrdersDet>
				}
			</CheckOutContainer>
		</>
	);
};

export default OrderStatus;
