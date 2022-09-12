import React, {useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import ItemCount from "./ItemCount.js";
import ItemList from "./ItemList.js";
import {getData} from "../utils/getData.js";
import mockupProducts from "../data/products.json";
import {FallingLines} from "react-loader-spinner";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

  // const onAdd = (cantidad) => {
  //   if (stock !== 0) {
  //     toast.success(`¡Agregaste ${cantidad} ítem/s al carrito!`);
  //     setStock(stock - cantidad);
  //   } else {
  //     toast.error("No hay mas ítems disponibles");
  //   }
  // };

  // let initial = 1;
  // let [stock, setStock] = useState(5);

  const [showProductList, setProductList] = useState([]);
  const [loadingProducts, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData(mockupProducts)
      .then((res) => {
        setLoading(false);
        setProductList(JSON.parse(res));
      })
      .catch((rej) => {
        toast.error("No se pudieron obtener los datos desde el servidor");
      });
  }, []);

  return (
    <>
      <section className="titulo">
        <h1>{greeting}</h1>
      </section>
      <section className="itemList">
        {loadingProducts ? (
          <FallingLines
            color="#f1c40f"
            width="500"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        ) : (
          <ItemList showProductList={showProductList} />
        )}
     {/*    <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> */}
      </section>
      <ToastContainer />
    </>
  );
};

export default ItemListContainer;
