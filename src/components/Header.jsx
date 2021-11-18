import React from "react";
import {Link} from 'react-router-dom'
import "./Header.scss";
import { GiCrownedSkull } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BiUserCircle } from "react-icons/bi";
const Header = () => {
  let iconStyles = { background: "transparent", fontSize: "4rem" };
  return (
    <div className="header-container">
      <Link className="left-side" to = '/items'>
        <GiCrownedSkull style = {iconStyles}/>
        <span className = 'brand'>DK</span>
      </Link>
      <div className="right-side">
        <Link className="icons" to ='/cart'>
          <AiOutlineShoppingCart />
          <span>Cart</span>
        </Link>
        {/* <Link className="icons" to = '/login'>
          <BiUserCircle />
          <span>User</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
