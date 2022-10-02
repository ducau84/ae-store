import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FallingLines } from "react-loader-spinner";
import { ProductContainer } from "./styled/ProductContainer.js";


const ItemDetailContainer = () => {

  const [ showProductDetail, setProductDetail ] = useState( {} );
  const [ loadingProduct, setLoading ] = useState( true );
  const URL_PRODUCT = "https://interactividades-server.herokuapp.com/productos?title=";

  let { prodId } = useParams();

  useEffect( () => {

    const getItem = async () => {

      try {
        const response = await fetch( `${URL_PRODUCT}${prodId}` );
        const data = await response.json();
        setProductDetail( data[ 0 ] );
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

  }, [ prodId ] );

  return (
    <>
      <ProductContainer>
        {
          loadingProduct
            ?
            <FallingLines color="#32a3c8" width="300" visible={true} />
            :
            <ItemDetail product={showProductDetail} />
        }
      </ProductContainer>
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;