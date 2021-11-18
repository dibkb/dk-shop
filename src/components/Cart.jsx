import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.scss";

const Cart = () => {
  const addedItems = useSelector((state) => state.addedItems);
  addedItems.sort(function (a, b) {
    return a.id - b.id;
  });
  const totalPrice = useSelector((state) => state.total);
  // console.log(addedItems.length);
  const handleToken = (token,addresses) => {
    console.log(token,addresses)
  };
  return (
    <div className="cart-container">
      {addedItems.map((item) => (
        <CartItem {...item} />
      ))}
      {addedItems.length !== 0 && (
        <div className="checkout-section">
          <span className="price">Total Price : ₹{totalPrice}</span>
          <button className="checkout-btn">
            <StripeCheckout
              stripeKey="pk_test_51H5WJcEuvU3Yjs7wpQUQyR7zO42ONE2pMfSZQnxwDQnXAlPb5RdcQsK9jo8oXPmTuMURjwtb8914DGDHMGgfzWCp00mPbjNm9e"
              token={handleToken}
              billingAddress
              shippingAddress
              amount = {totalPrice*100}
              currency="INR"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
