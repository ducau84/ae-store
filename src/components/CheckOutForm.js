import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { CartContext } from "../context/CartContext";
import { CheckOutContainer } from "../styled/CheckOutContainer";
import { ToastContainer } from "react-toastify";
import { Button } from "../styled/Button";

const CheckOutForm = ( { handleChange, handleSubmit, customerData } ) => {
	const { operPrice } = useContext( CartContext );

	return (
		<CheckOutContainer>
			<h1>Por favor ingresa tus datos:</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Nombre y Apellido:</label>
				<input
					type="text"
					name="name"
					placeholder="Nombre y Apellido"
					onChange={handleChange}
					value={customerData.name}
					required
				/>
				<label htmlFor="email">Correo Electrónico:</label>
				<input
					type="email"
					name="email"
					placeholder="nombre@dominio.com"
					onChange={handleChange}
					value={customerData.email}
					required
				/>
				<label htmlFor="email2">Repite la dirección de Correo:</label>
				<input
					type="email"
					name="email2"
					placeholder="nombre@dominio.com"
					onChange={handleChange}
					value={customerData.email2}
					required
				/>
				<label htmlFor="phone">Número de teléfono:</label>
				<input
					type="tel"
					name="phone"
					placeholder="Número de tel sin 0 y sin 15"
					pattern="[0-9]{10}"
					onChange={handleChange}
					value={customerData.phone}
					required
				/>
				<h4>
					Total a abonar:{" "} {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS", } ).format( operPrice() )}
				</h4>
				<label htmlFor="payment">Forma de pago:</label>
				<select
					name="payment"
					onChange={handleChange}
					value={customerData.payment}
					required
				>
					<option disabled value="">
						Selecciona una opción
					</option>
					<option value="transf">Transferencia Bancaria</option>
					<option value="tarjcred">Tarjeta de Credito</option>
					<option value="tarjdeb">Tarjeta de Debito</option>
					<option value="rapipago">Rapipago / Pago Fácil</option>
				</select>
				<Button type="submit" color="confirm">
					Confirmar Compra <CheckTwoToneIcon />
				</Button>
			</form>
			<Link to="/cart">
				<Button color="delete">
					Volver Al Carrito <ShoppingCartTwoToneIcon />
				</Button>
			</Link>
			<ToastContainer position="bottom-right" autoClose={2000} />
		</CheckOutContainer>
	);
};

export default CheckOutForm;
