import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";
import Reviews from "./Reviews";

const Product = ({ id, title, image, price, rating, numReviews }) => {
  const bgImage = {
    width: "100%",
    maxHeight: "250px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link className="item-container" to={`/product/${id}`}>
      <div className="background-image" style={bgImage}></div>
      <span className="title">{title}</span>
      <Reviews rating={rating} numReviews={numReviews} />
      <span className="price">₹{price}</span>
    </Link>
  );
};

export default Product;
