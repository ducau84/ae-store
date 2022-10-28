import React from "react";
import { Orders } from "../styled/Orders";
import { OrdersContainer } from "../styled/OrdersContainer";

const OrderDet = ( { order, id } ) => {

	return (

		<OrdersContainer>
			<Orders>
				<caption>Detalle de tu Orden: {id}</caption>
				<tbody>
					{order.date
						?
						<tr>
							<td colSpan="3">
								Fecha: {order.date.toDate().toLocaleString( "es-AR" )}
							</td>
						</tr>
						:
						""
					}
					<tr>
						<th>Productos:</th>
						<th>Cantidad:</th>
						<th>Precio:</th>
					</tr>
					{order.items.map( ( item, index ) => {
						return (
							<tr key={`${item}-${index}`}>
								<td key={`${item.title}-${index}`}>{item.title}</td>
								<td key={`${item.qty}-${index}`}>{item.qty}</td>
								<td key={`${item.price}-${index}`}>{new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( item.price )}</td>
							</tr>
						);
					} )}
					{order.total
						?
						<>
							<tr>
								<td colSpan="3">
									Total: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( order.total )}
								</td>
							</tr>
							<tr>
								<td colSpan="3">Estado: {order.status || "En Proceso"}</td>
							</tr>
						</>
						:
						""
					}
				</tbody>
			</Orders>
		</OrdersContainer>
	);
};

export default OrderDet;
