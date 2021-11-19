import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { products } from "./products";
// import { useDispatch,  } from "react-redux";
import Product from "./Product";
import "./ProductContainer.scss";
// import { ADD_ITEMS } from "./store/reducers/cartReducer";
// import {
//   dataFromSnapshot,
//   getEventsFromFirestore,
// } from "../firebase/firestoreService";
const ProductContainer = () => {
  // const itemproducts = useSelector((state) => state.items);
  // console.log(itemproducts)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const unsubscribe = getEventsFromFirestore({
  //     next: (snapshot) =>
  //       dispatch({
  //         type: ADD_ITEMS,
  //         payload: snapshot.docs.map((docSnapshot) =>
  //           dataFromSnapshot(docSnapshot)
  //         ),
  //       }),
  //     error: (error) => console.log(error)
  //   });

  //   return unsubscribe;
  // }, [dispatch]);
  let iconStyles = { background: "transparent", fontSize: "1.3rem" };

  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  // console.log(search, filteredProducts);
  return (
    <>
      <div className="searchBoxContainer">
        <BsSearch style={iconStyles} className="search-icon" />

        <input
          className="search-box"
          type="text"
          placeholder="Search item here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-container">
        {filteredProducts.map((item) => {
          // console.log(item.title)
          return <Product key={item.id} {...item}></Product>;
        })}
      </div>
    </>
  );
};

export default ProductContainer;
