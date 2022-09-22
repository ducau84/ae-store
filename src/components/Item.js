import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = ( { product } ) => {

  return (
          <>
            <BookContainer>
              <h3>{product.title}</h3>
              <img src={product.img} alt="book cover" />
              <h4>Precio: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( product.price )}</h4>
              <h5>Stock: {product.stock} Unidades</h5>
              <Link to={`/productos/${product.title}`}>
                <BtnDetails>Ver Detalle</BtnDetails>
              </Link>
            </BookContainer>
          </>
      );
};


const BookContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: Fredoka One;
  background-color: #ffffff87;
  box-shadow: #0000003d 0px 3px 8px;
  max-width: 320px;
  padding: 20px;
  border-radius: 15px;
  img {
    width: 100%;
    max-width: 200px;
    min-height: 100px;
  }
  h3 {
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 500;
    text-align: center;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h4 {
    font-size: 1.3rem;
    font-weight: 200;
    padding: 0.3rem;
  }
  a {
    text-decoration: none;
  }
`

const BtnDetails = styled.button`
  display: flex;
  align-items: center;
  font-family: Fredoka One;
  text-transform: uppercase;
  font-size: 1rem;
  color: #ffffff;
  margin: 5px;
  padding: 5px 10px;
  width: auto;
  border-radius: 15px;
  background-color: #e70e7b;
  border: #1e005a solid 2px;
  box-shadow: #0000003d 0px 3px 8px;

  &:hover {
    background-color: #0e2537;
    border: #32a3c8 solid 2px;
    transition: 800ms ease;
    cursor: pointer;
  }
`

export default Item