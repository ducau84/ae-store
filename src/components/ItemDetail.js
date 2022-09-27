import React, { useState } from "react";
import ItemCount from "./ItemCount.js";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
import { Button } from "./styled/Button.js"
import { ProductHeader } from "./styled/ProductHeader.js";
import { ProductCover } from "./styled/ProductCover.js";
import { ProductDetailContainer } from "./styled/ProductDetailContainer.js";
import { ProductCounterContainer } from "./styled/ProductCounterContainer.js";
import { ShopContainer } from "./styled/ShopContainer.js";


const ItemDetail = ( { product } ) => {

  const [ counter, setCounter ] = useState();

  const onAdd = ( cantidad ) => {
    setCounter( cantidad )
    toast.success( `¡Agregaste ${cantidad} ítem/s al carrito!` );
  };

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
          <h2>Precio:{new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( product.price )}</h2>
          {
            counter
              ?
              <ShopContainer>
                <Link to="/cart">
                  <Button>
                    <ShoppingCartCheckoutTwoToneIcon />
                    Ir Al Carrito
                  </Button>
                </Link>
              </ShopContainer>
              :
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          }
        </ProductCounterContainer>
      </ProductDetailContainer>
      <Link to="/">
        <Button>
          <ArrowBackTwoToneIcon />
          Volver Al Listado
        </Button>
      </Link>
    </>
  );
};

export default ItemDetail;
