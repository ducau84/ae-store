import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";

const saludo = "¡Bienvenido a nuestra tienda!";

const categorias = [
  { id: 1, nombre: "Escolares" },
  { id: 2, nombre: "Infantiles" },
  { id: 3, nombre: "Narrativas" },
];

const App = () => {
  return (
    <>
      <NavBar categories={categorias} />
      <ItemListContainer greeting={saludo} /> 
      <ItemDetailContainer />
    </>
  );
};

export default App;
