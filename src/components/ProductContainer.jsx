import React, { useEffect } from "react";
import { products } from "./products";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import "./ProductContainer.scss";
import { ADD_ITEMS } from "./store/reducers/cartReducer";
import {
  dataFromSnapshot,
  getEventsFromFirestore,
} from "../firebase/firestoreService";
const ProductContainer = () => {
  // const itemproducts = useSelector((state) => state.items);
  // console.log(itemproducts)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = getEventsFromFirestore({
      next: (snapshot) =>
        dispatch({
          type: ADD_ITEMS,
          payload: snapshot.docs.map((docSnapshot) =>
            dataFromSnapshot(docSnapshot)
          ),
        }),
      error: (error) => console.log(error)
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="product-container">
      {products.map((item) => {
        console.log(item.title)
        return <Product key={item.id} {...item}></Product>;
      })}
    </div>
  );
};

export default ProductContainer;
