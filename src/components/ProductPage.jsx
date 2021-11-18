import React from "react";
import { useDispatch } from "react-redux";
import UnderLine from "../ui/UnderLine";
import "./ProductPage.scss";
import { products } from "./products";
import Reviews from "./Reviews";
import { ADD_TO_CART } from "./store/reducers/cartReducer";
const ProductPage = (props) => {
  const dispatch = useDispatch();
  const {
    title,
    brand,
    image,
    price,
    countInStock,
    rating,
    description,
    numReviews,
  } = products.find(
    (product) => product.id === parseInt(props.match.params.id)
  );
  // console.log(title)
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="product-page-container">
      <div className="img-container" style={bgImage}></div>
      <div className="product-info">
        <UnderLine>
          <div className="basic-info">
            <span className="title">{title}</span>
            <span className="brand">{brand}</span>
          </div>
        </UnderLine>
        <UnderLine>
          <div className="review-container">
            <Reviews rating={rating} numReviews={numReviews} />
          </div>
        </UnderLine>
        <div className="price">₹ {price}</div>
        <p className="description">{description}</p>
      </div>
      <div className="buying-info">
        <div className="buy-price-ctn">
          Price : <span className="price-buy">₹ {price}</span>
        </div>
        <div className="buy-stock-ctn">
          Status :{" "}
          <span className="status-buy">
            {countInStock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="buy-btn-ctn">
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: ADD_TO_CART,
                payload: props.match.params.id,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
