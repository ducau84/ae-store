import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import { toast, ToastContainer } from "react-toastify";
import { FallingLines } from "react-loader-spinner";
import { BooksListContainer } from "../styled/BooksListContainer.js";
import { Greeter } from "../styled/Greeter.js";

const ItemListContainer = ( { greeting } ) => {

  const [ showProductList, setProductList ] = useState( [] );
  const [ loadingProducts, setLoading ] = useState( true );

  let { catId } = useParams();

  useEffect( () => {
    
    const productsCollection = collection( db, "products" );
    const queryCat = query( productsCollection, where( "genre", "==", `${catId}` ) );

    const getItemList = async () => {

      try {
        const res = await getDocs( catId ? queryCat : productsCollection );
        const data = res.docs.map( ( product ) => {
          return {
            ...product.data(),
            id: product.id,
          };
        } );
        setProductList( data );
      }
      catch ( err ) {
        console.error( err );
        toast.error( "Ocurrió un error cargando los datos desde el Servidor" );
      }
      finally {
        setLoading( false );
      }
    };

    getItemList();

  }, [ catId ] );

  return (
    <>
      <Greeter>
        <h1>{greeting}</h1>
      </Greeter>
      <BooksListContainer>
        {
          loadingProducts
            ?
            <FallingLines color="#e6077a" width="450" visible={true} />
            :
            <ItemList showProductList={showProductList} />
        }
      </BooksListContainer>

      <ToastContainer />
    </>
  );
};

export default ItemListContainer;
