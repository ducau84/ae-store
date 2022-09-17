import React from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount.js";

const ItemDetail = ( { product, onAdd } ) => {
    return (
        <>
            <ProductHeader>
                <h1>{product.title}</h1>
                <h3>Autor: {product.autor}</h3>
            </ProductHeader>
            <ProductDetailContainer>
                <ProductDescription>
                    <img src={product.img} alt="book cover" />
                    <h4>{product.desc}</h4>
                </ProductDescription>
                <ProductCounterContainer>
                    <h2>
                        Precio:{" "}
                        {new Intl.NumberFormat( "es-AR", {
                            style: "currency",
                            currency: "ARS",
                        } ).format( product.price )}
                    </h2>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    <span>Stock: {product.stock} unidades</span>
                </ProductCounterContainer>
            </ProductDetailContainer>
        </>
    );
};

const ProductHeader = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    font-family: Fredoka One;
  }
  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 100;
    font-size: 1rem;
  }
`;

const ProductDetailContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media (max-width: 767px) {
     {
      flex-flow: wrap;
    }
 `

const ProductDescription = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 500px;
  img {
    width: 100%;
    max-width: 500px;
  }
  h4 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
  }
`

const ProductCounterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin-top:2rem;
`

export default ItemDetail;
