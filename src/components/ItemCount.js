import React, { useState } from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { Button } from "../styled/Button";
import { ButtonCounter } from "../styled/ButtonCounter";
import { ShopContainer } from "../styled/ShopContainer";
import { Counter } from "../styled/Counter";
import { StockContainer } from "../styled/StockContainer";
import { toast } from "react-toastify";


const ItemCount = ( { initial, stock, onAdd } ) => {

	const [ contador, setContador ] = useState( initial );

	const restar = () => {
		setContador( contador - 1 );
	};

	const sumar = () => {
		setContador( contador + 1 );
	};

	return (
		<ShopContainer>
			<StockContainer>
				Stock: {stock} unidades
			</StockContainer>
			<Counter>
				<span>Cantidad:</span>
				<ButtonCounter disabled={contador <= 1} onClick={restar}>
					-
				</ButtonCounter>
				<span>{contador}</span>
				<ButtonCounter disabled={contador >= stock} onClick={sumar}>
					+
				</ButtonCounter>
			</Counter>
			<Button color="normal" onClick={() => stock <= 0 ? toast.error( `¡No hay más unidades disponibles!` ) : onAdd( contador )}>
				<AddShoppingCartTwoToneIcon sx={{ fontSize: 25 }} />AGREGAR AL CARRITO
			</Button>
		</ShopContainer>
	);
};

export default ItemCount;