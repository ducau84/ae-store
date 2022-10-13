import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FallingLines } from "react-loader-spinner";
import { ProductContainer } from "../styled/ProductContainer.js";
import { db } from "../firebase/firebase.js";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [ showProductDetail, setProductDetail ] = useState( {} );
  const [ loadingProduct, setLoading ] = useState( true );

  let { prodId } = useParams();

  useEffect( () => {

    const productCollection = collection( db, "products" );
    const refDoc = doc( productCollection, prodId );

    const getItem = async () => {
      
      try {
        const res = await getDoc( refDoc );
        setProductDetail( {
          id: res.id,
          ...res.data(),
        } );
      }
      catch ( err ) {
        console.error( err );
        toast.error( "Ocurrió un error cargando los datos desde el Servidor", {
          theme: "colored" } );
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
      <ToastContainer position="bottom-right" autoClose={2000} />
    </>
  );
};

export default ItemDetailContainer;
