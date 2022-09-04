import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const saludo = "¡Bienvenido a nuestra tienda!";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={saludo} />
    </>
  );
};

export default App;
