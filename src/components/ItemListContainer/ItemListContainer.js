import { useState, useEffect } from "react";
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])

    useEffect(())
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
