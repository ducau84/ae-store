import React from "react";
import Item from "./Item.js";

const ItemList = ( { showProductList } ) => {
  return (
    <>
      {showProductList.map( ( product, index ) => (
        <Item key={`${product.title}-${index}`} product={product} />
      ) )
      }
    </>
  );
};

export default ItemList;
