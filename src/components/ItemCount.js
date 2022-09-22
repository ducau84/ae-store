import React, { useState } from "react";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import styled from "styled-components";

const ItemCount = ( { initial, stock, onAdd } ) => {
  
  const [ contador, setContador ] = useState( initial );

  const restar = () => {
    setContador( contador - 1 );
  };

  const sumar = () => {
    setContador( contador + 1 );
  };

  return (
    <ShopContainer>
      <Counter>
        <span>Cantidad:</span>
        <ButtonCounter disabled={contador <= 1} onClick={restar}> - </ButtonCounter>
        <span>{contador}</span>
        <ButtonCounter disabled={contador >= stock} onClick={sumar}> + </ButtonCounter>
      </Counter>
      <ButtonAddtoCart disabled={contador > stock} onClick={() => onAdd( contador )}>
        <AddShoppingCartTwoToneIcon sx={{ fontSize: 25 }} />
        AGREGAR AL CARRITO
      </ButtonAddtoCart>
    </ShopContainer>
  );
};


const ShopContainer = styled.div`
  font-family: Fredoka One;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #0e253736;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  max-width: 320px;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 15px;
`

const Counter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  padding: 2px 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const ButtonCounter = styled.button`
  margin: 10px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 25px;
  background-color: #0d2538;
  color: #ffffff;
  font-weight: 500;
  border: #1e005a 2px solid;
  &:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  background-color: #32a3c8;
  transition: 600ms ease;
  cursor: pointer;
`

const ButtonAddtoCart = styled.button`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 8px;
  width: auto;
  font-family: Fredoka One;
  font-size: 1rem;
  color: #ffffff;
  border: #0d2538 solid 1px;
  border-radius: 15px;
  background-color:#0d2538;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
  background-color: #32a3c8;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  
  transition: 800ms ease;
  cursor: pointer;
  @media (max-width: 767px) {
     {
      flex-flow: wrap;
    }
`

export default ItemCount;