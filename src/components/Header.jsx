import React from "react";
import "./Header.scss";
import { GiCrownedSkull } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  return (
    <div className="header-container">
      <div className="left-side">
        <GiCrownedSkull />
        <span>DK</span>
      </div>
      <div className="right-side">
        <div className="icons">
          <AiOutlineShoppingCart />
          <span>Cart</span>
        </div>
        <div className="icons">
          <BiUserCircle />
          <span>User</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
