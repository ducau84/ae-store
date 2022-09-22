import React from "react";
import styled from "styled-components";
import ItemCount from "./ItemCount.js";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <GoBack>
                <ArrowBackTwoToneIcon />
                Volver Al Listado
              </GoBack>
            </Link>
          </>
      );
};

const ProductHeader = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    font-family: Fredoka One;
    padding-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h3 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 800;
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`

const ProductDetailContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  @media (max-width: 767px) {
     {
      flex-flow: wrap;
    }
  }
 `

const ProductCover = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  max-height: 65vh;
  img {
    width: 100%;
    max-width: 580px;
  }
  span {
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    padding: 0.2rem 1rem;
  }
`

const ProductCounterContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  max-width: 400px;
  margin: 2rem;
  h2 {
    font-size: 2rem;
    padding: 1rem 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    margin 15px;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h4 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    text-align: justify;
    padding: 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
  }
`

const GoBack = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 8px;
  width: auto;
  font-family: Fredoka One;
  font-size: 1rem;
  text-transform: uppercase;
  color: #ffffff;
  border: #fff solid 1px;
  border-radius: 15px;
  background-color: #0e2537;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  &:hover {
  background-color: #32a3c8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  transition: 800ms ease;
  }
  
  @media (max-width: 767px) {
     {
      flex-flow: wrap;
    }
  }
`

export default ItemDetail;
