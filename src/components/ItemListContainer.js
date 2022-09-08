import React, {useState} from "react";
import ItemCount from "./ItemCount.js";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemListContainer = ({greeting}) => {

  const onAdd = (cantidad) => {
    if(stock!==0){
    toast.success(`¡Agregaste ${cantidad} ítem/s al carrito!`)
     setStock(stock-cantidad);
  }else{toast.error("No hay mas ítems disponibles")};
  };

  let initial = 1
  let [stock, setStock] = useState(5);
  
  return (
    <>
      <section style={styles.alin}>
        <h1 style={styles.titulo}>{greeting}</h1>
      </section>
      <div style={styles.itemList}>
        <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        <ToastContainer />
      </div>
    </>
  );
};

const styles = {
  alin: {
    margin: 20,
    textAlign: "center",
  },
  titulo: {
    fontFamily: "Fredoka One",
    color: "#040724",
    textTransform: "Uppercase",
    fontSize: "3rem",
  },
  itemList:{
    display:"grid", 
    justifyContent:"center"
  }
};

export default ItemListContainer;
