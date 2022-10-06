import React from "react";
import { Link } from "react-router-dom";
import { BookContainer } from "../styled/BookContainer";
import { ButtonDetails } from "../styled/ButtonDetails";


const Item = ( { product } ) => {

  return (
    <>
      <BookContainer>
        <h3>{product.title}</h3>
        <img src={product.img} alt="book cover" />
        <h4>Precio: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( product.price )}</h4>
        <Link to={`/productos/${product.id}`}>
          <ButtonDetails>Ver Detalle</ButtonDetails>
        </Link>
      </BookContainer>
    </>
  );
};

export default Item