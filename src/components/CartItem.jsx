import React, { useEffect } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  INCREASE_ITEM,
  DECREASE_ITEM,
  DELETE_ITEM,
} from "./store/reducers/cartReducer";
import { MdClear } from "react-icons/md";
import "./Cart.scss";

const CartItem = ({ id, image, title, price, brand }) => {
  const dispatch = useDispatch();
  let iconStyles = {
    color: "white",
    background: "transparent",
    fontSize: "1.2rem",
  };
  let deleteStyle = { color: "red", fontSize: "1.8rem" };
  const addedItems = useSelector((state) => state.addedItems);
  addedItems.sort(function (a, b) {
    return a.id - b.id;
  });
  const cartItem = addedItems.find((item) => item.id === id);

  useEffect(() => {
    // console.log('useEffect')
  }, [cartItem]);

  const bgImage = {
    width: "180px",
    height: "180px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const increaseItem = (e) => {
    e.preventDefault();
    dispatch({
      type: INCREASE_ITEM,
      payload: id,
    });
  };

  const decreaseItem = (e) => {
    e.preventDefault();
    dispatch({
      type: DECREASE_ITEM,
      payload: id,
    });
  };

  const itemDeleteHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  };
  return (
    <div className="cartitem-container">
      <Link
        className="background-image"
        to={`/product/${id}`}
        style={bgImage}
      />
      <span className="item-name">{title}</span>
      <span className="item-brand">{brand}</span>
      <form className="form">
        <button onClick={decreaseItem}>
          <IoIosRemove style={iconStyles} />
        </button>
        <input type="number" value={cartItem.quantity} onChange = {(e) =>e.target.value}></input>
        <button onClick={increaseItem}>
          <IoIosAdd style={iconStyles} />
        </button>
      </form>
      <span className="item-price">
        ₹{parseInt(cartItem.price) * parseInt(cartItem.quantity)}
      </span>
      <button className="deleteBtn" onClick={itemDeleteHandler}>
        <MdClear style={deleteStyle} />
      </button>
    </div>
  );
};

export default CartItem;
