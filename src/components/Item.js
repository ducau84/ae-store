import React from "react";
import styled from "styled-components";


const Item = ( { product } ) => {
  return (
    <>
      <BookContainer>
        <h3>{product.title}</h3>
        <img src={product.img} alt="book cover" />
        <h4>Precio: ${product.price}</h4>
        <h5>Stock: {product.stock} Unidades</h5>
        <BtnDetails>Ver Detalle</BtnDetails>
      </BookContainer>
    </>
  );
};

export default Item;


const BookContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: Fredoka One;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #e6def733;
  max-width: 320px;
  padding: 20px;
  border-radius: 15px;
  img {
    width: 100%;
    max-width: 200px;
    min-height: 100px;
  }
  h3 {
    font-weight: 500;
    text-align: center;
  }
  h4,
  h5 {
    font-weight: 200;
    padding: 0.3rem;
  }
`

const BtnDetails = styled.button`
  display: flex;
  align-items: center;
  font-family: Fredoka One;
  font-size: 1rem;
  margin: 5px;
  padding: 5px;
  width: auto;
  border-radius: 15px;
  background-color: #f3e816;
  border: #1e005a solid 2px;
  :hover {
    color: #ffffff;
    background-color: #1e005a;
    border: #f3e816 solid 2px;
    transition: 800ms ease;
    cursor: pointer;
  }
`