import React, { useState, useEffect } from "react";
import ItemList from "./ItemList.js";
import { toast, ToastContainer } from "react-toastify";
import { FallingLines } from "react-loader-spinner";
import styled from "styled-components";

const ItemListContainer = ( { greeting } ) => {
  const [ showProductList, setProductList ] = useState( [] );
  const [ loadingProducts, setLoading ] = useState( true );

  useEffect( () => {
    
    const getItemList = async () => {

      try {
        const response = await fetch(
          "https://interactividades-server.herokuapp.com/productos"
        );
        const data = await response.json();
        setProductList( data );
      } catch ( err ) {
        console.error( err );
        toast.error( "Ocurrió un error cargando los datos desde el Servidor" );
      } finally {
        setLoading( false );
      }
    };

    getItemList();
  }, [] );

  return (
    <>
      <Greeter>
        <h1>{greeting}</h1>
      </Greeter>
      <BooksContainer>
        {
          loadingProducts 
         ? 
          <FallingLines color="#e6077a" width="450" visible={true} />
         : 
          <ItemList showProductList={showProductList} />
        }
      </BooksContainer>
      <ToastContainer />
    </>
  );
};

const Greeter = styled.div`
  margin: 20px;
  text-align: center;
  h1 {
    font-family: "Fredoka One";
    color: #0d2538;
    text-transform: Uppercase;
    font-size: 3rem;
  }
`;

const BooksContainer = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto auto;
  gap: 1rem;

  @media (max-width: 767px) {
     {
      grid-template-columns: auto auto;
    }
    svg {
      width: 250px;
    }
  }

  @media (max-width: 467px) {
     {
      grid-template-columns: auto;
    }
  }
`;

export default ItemListContainer;
