import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Cart from "./components/Cart.js";
import CartProvider from "../src/context/CartContext.js"
import CartCheckOut from "./components/CartCheckOut.js";
import Footer from "./components/Footer.js";
import OrderStatus from "./components/OrderStatus.js";

const saludo = "¡Bienvenido a nuestra tienda!";

const categorias = [
	{ id: 1, name: "Escolares", route: '/category/Escolares' },
	{ id: 2, name: "Infantiles", route: '/category/Infantiles' },
	{ id: 3, name: "Narrativas", route: '/category/Narrativas' },
];

const App = () => {

	return (
		<>
			<BrowserRouter>
				<CartProvider>
					<NavBar categories={categorias} />
					<Routes>
						<Route path='/' element={<ItemListContainer greeting={saludo} />} />
						<Route path='/category/:catId' element={<ItemListContainer greeting={saludo} />} />
						<Route path='/products/:prodId' element={<ItemDetailContainer />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='/checkout' element={<CartCheckOut />} />
						<Route path='/order_status' element={<OrderStatus />} />
					</Routes>
				</CartProvider>
				<Footer />
			</BrowserRouter>
			<ToastContainer position="bottom-right" autoClose={2000} />
		</>
	);
};

export default App;
