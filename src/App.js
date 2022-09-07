import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const saludo = "¡Bienvenido a nuestra tienda!";

const categorias = [
  {id: 1, nombre: "Libros de Texto"},
  {id: 2, nombre: "Infantiles"},
  {id: 3, nombre: "Novelas"},
];

const App = () => {
  return (
    <>
      <NavBar categories={categorias} />
      <ItemListContainer greeting={saludo} />
    </>
  );
};

export default App;
