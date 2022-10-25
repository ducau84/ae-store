import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styled/Button";
import { Orders } from "../styled/Orders";
import { OrdersContainer } from "../styled/OrdersContainer";
import { ArrowBackTwoTone } from "@mui/icons-material";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const OrderDet = ( { order, reload } ) => {

	return (
		
		<OrdersContainer>
			<Orders>
				<caption>Detalle de tu Orden: {order.id}</caption>
				<tbody>
					<tr>
						<td colSpan="3">
							Fecha: {order.orderData.date.toDate().toLocaleString( "es-AR" )}
						</td>
					</tr>
					<tr>
						<th>Productos:</th>
						<th>Cantidad:</th>
						<th>Precio:</th>
					</tr>
					{order.orderData.items.map( ( item, index ) => {
						return (
							<tr key={`${item}-${index}`}>
								<td key={`${item.title}-${index}`}>{item.title}</td>
								<td key={`${item.qty}-${index}`}>{item.qty}</td>
								<td key={`${item.price}-${index}`}>{new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( item.price )}</td>
							</tr>
						);
					} )}
					<tr>
						<td colSpan="3">
							{" "}
							Total:{" "}
							{new Intl.NumberFormat( "es-AR", {
								style: "currency",
								currency: "ARS",
							} ).format( order.orderData.total )}
						</td>
					</tr>
					<tr>
						<td colSpan="3">Estado: {order.orderData.status || "En Proceso"}</td>
					</tr>
				</tbody>
			</Orders>
			<div>
				<Button color="confirm" onClick={reload}>
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
		</OrdersContainer>

	);
};

export default OrderDet;
