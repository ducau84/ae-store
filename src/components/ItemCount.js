import React, {useState} from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import "./ItemCount.css";

const ItemCount = ({initial, stock, onAdd}) => {
  const [contador, setContador] = useState(parseInt(initial));

  const restar = () => {
    setContador(contador - 1);
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="container">
      <div className="contador">
        <span>Cantidad:</span>
        <button className="btnSR" disabled={contador <= 1} onClick={restar}>
          -
        </button>
        <span>{contador}</span>
        <button className="btnSR" disabled={contador >= stock} onClick={sumar}>
          +
        </button>
      </div>
      <div>
        <button
          className="btnAddCart"
          disabled={contador > stock}
          onClick={() => onAdd(contador)}
        >
          <AddShoppingCartTwoToneIcon sx={{fontSize: 25}} />
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
