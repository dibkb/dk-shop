import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import "./Product.scss";
const Reviews = ({numReviews,rating}) => {
  const ratingWhole = Array.from(Array(Math.round(rating)).keys());
  const adhaRating = rating - Math.round(rating);
  let iconStyles = { background: "transparent", fontSize: "1em" };
  return (
    <section className="stars">
      <span className="reviews">
        {ratingWhole.map((star, id) => (
          <AiFillStar style={iconStyles} key={id} />
        ))}
        {adhaRating > 0 ? <FaStarHalf style={iconStyles} /> : ""}
      </span>
      <span className="num-reviews">{numReviews}</span>
    </section>
  );
};

export default Reviews;
