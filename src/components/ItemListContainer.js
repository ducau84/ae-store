import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.js";
import { toast, ToastContainer } from "react-toastify";
import { FallingLines } from "react-loader-spinner";
import { BooksListContainer } from "./styled/BooksListContainer.js";
import { Greeter } from "./styled/Greeter.js";

const ItemListContainer = ( { greeting } ) => {

  const [ showProductList, setProductList ] = useState( [] );
  const [ loadingProducts, setLoading ] = useState( true );

  let { catId } = useParams();

  const URL_BASE = "https://interactividades-server.herokuapp.com/productos";
  const URL_CATEGORY = "https://interactividades-server.herokuapp.com/productos?genre=";

  useEffect( () => {

    const getItemList = async () => {

      try {
        const response = await fetch(
          catId ? `${URL_CATEGORY}${catId}` : URL_BASE
        );
        const data = await response.json();
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
