import React from "react";
import {Link} from 'react-router-dom'
import "./Product.scss";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";

const Product = ({
  id,
  title,
  brand,
  image,
  price,
  countInStock,
  rating,
  numReviews,
  description,
}) => {
  const bgImage = {
    width: "100%",
    maxHeight: "250px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  //   const ratingWhole = Math.round(rating);
  const ratingWhole = Array.from(Array(Math.round(rating)).keys());
  const adhaRating = rating - Math.round(rating);
  let iconStyles = { background: "transparent", fontSize: "1em" };

  return (
    <Link className="item-container" to ={`/product/${id}`}>
      <div className="background-image" style={bgImage}></div>
      <span className="title">{title}</span>
      <section className = 'stars'>
        <span className="reviews">
          {ratingWhole.map((star, id) => (
            <AiFillStar style={iconStyles} key={id} />
          ))}
          {adhaRating > 0 ? <FaStarHalf style={iconStyles} /> : ""}
        </span>
        <span className = 'num-reviews'>{numReviews}</span>
      </section>
      <span className="price">₹{price}</span>
    </Link>
  );
};

export default Product;
