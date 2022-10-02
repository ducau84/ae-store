import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import ArrowBackTwoToneIcon from "@mui/icons-material/ArrowBackTwoTone";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import { toast } from "react-toastify";
import { Button } from "../styled/Button.js";
import { ProductHeader } from "../styled/ProductHeader.js";
import { ProductCover } from "../styled/ProductCover.js";
import { ProductDetailContainer } from "../styled/ProductDetailContainer.js";
import { ProductCounterContainer } from "../styled/ProductCounterContainer.js";
import { CartContext } from "../context/CartContext.js";

const ItemDetail = ( { product } ) => {

  const [ goToCartBtn, setGoToCartBtn ] = useState( false );

  const { addItem } = useContext( CartContext );

  const onAdd = ( cantidad ) => {

    addItem( product, cantidad );
    setGoToCartBtn( true );
    toast.success( `¡Agregaste: ${cantidad} ${product.title} al carrito!` )

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
          <h2>
            Precio: {new Intl.NumberFormat( "es-AR", { style: "currency", currency: "ARS" } ).format( product.price )}
          </h2>
        </ProductCover>
        <ProductCounterContainer>
          <h4>{product.desc}</h4>
          {
            goToCartBtn
              ?
              <Link to="/cart">
                <Button>
                  <ShoppingCartCheckoutTwoToneIcon />
                  Ir Al Carrito
                </Button>
              </Link>
              :
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
          }
          <Link to="/">
            <Button>
              <ArrowBackTwoToneIcon />
              Volver Al Listado
            </Button>
          </Link>
        </ProductCounterContainer>
      </ProductDetailContainer>
    </>
  );
};

export default ItemDetail;
