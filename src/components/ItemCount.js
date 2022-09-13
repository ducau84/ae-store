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
        <ButtonCounter disabled={contador <= 1} onClick={restar}>
          -
        </ButtonCounter>
        <span>{contador}</span>
        <ButtonCounter disabled={contador >= stock} onClick={sumar}>
          +
        </ButtonCounter>
      </Counter>
      <ButtonAddtoCart disabled={contador > stock} onClick={() => onAdd( contador )}>
        <AddShoppingCartTwoToneIcon sx={{ fontSize: 25 }} />
        AGREGAR AL CARRITO
      </ButtonAddtoCart>
    </ShopContainer>
  );
};

export default ItemCount;

const ShopContainer = styled.div`
  font-family: Fredoka One;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #1e005a33;
  max-width: 320px;
  padding: 20px;
  border-radius: 15px;
`

const Counter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  padding: 2px 15px;
`

const ButtonCounter = styled.button`
  margin: 10px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 25px;
  background-color: #1e005a;
  color: #ffffff;
  font-weight: 500;
  border: #1e005a 2px solid;
  :hover{
  color: #1e005a;
  background-color: #f3e816;
  transition: 600ms ease;
  cursor: pointer;
`

const ButtonAddtoCart = styled.button`
  display: flex;
  align-items: center;
  font-family: Fredoka One;
  font-size: 1rem;
  margin: 10px;
  padding: 8px;
  width: auto;
  border-radius: 15px;
  background-color: #f3e816;
  border: #1e005a solid 2px;
  :hover {
  color: #ffffff;
  background-color:#1e005a;
  border: #f3e816 solid 2px;
  transition: 800ms ease;
  cursor: pointer;
`
