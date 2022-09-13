import React, {useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemList from "./ItemList.js";
import getData from "../utils/getData.js";
import mockupProducts from "../data/products.json";
import {FallingLines} from "react-loader-spinner";
import styled from "styled-components";


const ItemListContainer = ({greeting}) => {

  const onAdd = (cantidad) => {
    toast.success(`¡Agregaste ${cantidad} ítem/s al carrito!`);
  };

  const [showProductList, setProductList] = useState([]);
  const [loadingProducts, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getData(mockupProducts).then((res, rej) => {
      setLoading(false);
      setProductList(JSON.parse(res));
    });
  }, []);

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

export default ItemListContainer;


const Greeter = styled.div`
  margin: 20px;
  text-align: center;
  h1 {
    font-family: "Fredoka One";
    color: #0d2538;
    text-transform: Uppercase;
    font-size: 3rem;
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
