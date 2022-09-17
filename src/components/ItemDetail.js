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
                <ProductCover>
                    <img src={product.img} alt="book cover" />
                    <span>Stock: {product.stock} unidades</span>
                </ProductCover>
                <ProductCounterContainer>
                    <h4>{product.desc}</h4>
                    <h2>
                        Precio:{" "}
                        {new Intl.NumberFormat( "es-AR", {
                            style: "currency",
                            currency: "ARS",
                        } ).format( product.price )}
                    </h2>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                </ProductCounterContainer>
            </ProductDetailContainer>
        </>
    );
};

const ProductHeader = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    font-family: Fredoka One;
    padding-bottom: 1rem;
  }
  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: uppercase;
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

const ProductCover = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
  img {
    width: 100%;
    max-width: 700px;
  }
`

const ProductCounterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  margin: 2rem;
  h2{
    font-size: 2rem;
  }
  h4 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    text-align: justify;
    padding: 2rem 0;
  }
`

export default ItemDetail;
