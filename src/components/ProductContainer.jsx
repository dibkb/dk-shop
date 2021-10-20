import React from "react";
import { products } from "./products";
import Product from './Product'
import './ProductContainer.scss'
const ProductContainer = () => {
  return (
    <div className = 'product-container'>
      {products.map((item) => {
        return <Product key={item.id} {...item}></Product>;
      })}
    </div>
  );
};

export default ProductContainer;
