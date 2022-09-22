import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { FallingLines } from "react-loader-spinner";

const ItemDetailContainer = () => {

  let { prodId } = useParams();

  const onAdd = ( cantidad ) => {
    toast.success( `¡Agregaste ${cantidad} ítem/s al carrito!` );
  };

  const [ showProductDetail, setProductDetail ] = useState( {} );
  const [ loadingProduct, setLoading ] = useState( true );
  const URL_PRODUCT = "https://interactividades-server.herokuapp.com/productos?title=";

  useEffect( () => {

    const getItem = async () => {

      try {
        const response = await fetch(`${URL_PRODUCT}${prodId}`);
        const data = await response.json();
        setProductDetail( data[0] );
      } 
      
      catch ( err ) {
        console.error( err );
        toast.error( "Ocurrió un error cargando los datos desde el Servidor" );
      } 
      
      finally {
        setLoading( false );
      }
    };

    getItem();

  }, [prodId] );

  return (
          <>
            <ProductContainer>
              {loadingProduct 
              ? 
                <FallingLines color="#32a3c8" width="300" visible={true} />
              : 
                <ItemDetail product={showProductDetail} onAdd={onAdd} />
              }
            </ProductContainer>
            <ToastContainer />
          </>
     );
};

const ProductContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  padding: 20px;
  border-radius: 15px;
  max-width: 1200px;
  min-height: 80vh;
  font-family: Fredoka One;
  background-color: #ffffff87;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  a {
    text-decoration: none;
  }
  @media (max-width: 767px) {
    {
      margin: 1rem;
    }
  }
`

export default ItemDetailContainer;
