import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ItemList from "./ItemList.js";
import {toast, ToastContainer} from "react-toastify";
import {FallingLines} from "react-loader-spinner";
import styled from "styled-components";

const ItemListContainer = ({greeting}) => {
  let {catId} = useParams();

  const [showProductList, setProductList] = useState([]);
  const [loadingProducts, setLoading] = useState(true);

  const URL_BASE = "https://interactividades-server.herokuapp.com/productos";
  const URL_CATEGORY =
    "https://interactividades-server.herokuapp.com/productos?genre=";

  useEffect(() => {
    const getItemList = async () => {
      try {
        const response = await fetch(
          catId ? `${URL_CATEGORY}${catId}` : URL_BASE
        );
        const data = await response.json();
        setProductList(data);
      } catch (err) {
        console.error(err);
        toast.error("Ocurrió un error cargando los datos desde el Servidor");
      } finally {
        setLoading(false);
      }
    };

    getItemList();
  }, [catId]);

  return (
    <>
        <Greeter>
          <h1>{greeting}</h1>
        </Greeter>
        <BooksContainer>
          {loadingProducts 
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
  padding: 20px;
  text-align: center;
  h1 {
    font-family: "Fredoka One";
    color: #0d2538;
    text-transform: Uppercase;
    font-size: 3rem;
    text-shadow: 0px 3px 3px #0e25373d;
  }
`

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
`

export default ItemListContainer;
