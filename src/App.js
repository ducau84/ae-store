import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Cart from "./components/Cart.js";
import CartProvider from "../src/context/CartContext.js"

const saludo = "¡Bienvenido a nuestra tienda!";

const categorias = [
  { id: 1, nombre: "Escolares", route: '/categoria/Escolares' },
  { id: 2, nombre: "Infantiles", route: '/categoria/Infantiles' },
  { id: 3, nombre: "Narrativas", route: '/categoria/Narrativas' },
];

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar categories={categorias} />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={saludo} />} />
            <Route path='/categoria/:catId' element={<ItemListContainer greeting={saludo} />} />
            <Route path='/productos/:prodId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
