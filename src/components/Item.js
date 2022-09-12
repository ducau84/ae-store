import React from "react";
import "./Item.css";

const Item = ({product}) => {

  return (
    <>
      <div className="bookContainer">
        <h3>{product.title}</h3>
        <img src={product.img} alt="book cover" />
        <h4>Precio: ${product.price}</h4>
        <h5>Stock: {product.stock} Unidades</h5>
        <button className="btnDetails">Ver Detalle</button>
      </div>
    </>
  );
};

export default Item;
