import React from "react";

const ItemListContainer = ({greeting}) => {
  return (
    <section style={styles.alin}>
      <h1 style={styles.titulo}>{greeting}</h1>
    </section>
  );
};

const styles = {
  alin: {
    margin:20,
    textAlign: "center"
  },
  titulo: {
    fontFamily: "Fredoka One",
    color: "#040724",
    textTransform: "Uppercase",
    fontSize: "3rem",
  }
};

export default ItemListContainer;
