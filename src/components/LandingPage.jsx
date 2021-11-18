import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
const LandingPage = () => {
  const imageLink =
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80";
  const bgImage = {
    width: "100%",
    minHeight: "100vh",
   //  backgroundImage: `url(${imageLink})`,
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)),url(${imageLink})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="landing-container" style={bgImage}>
      <h1>DK TECH STORE</h1>
      <Link to = '/items'>
         <button>Visit Store</button></Link>
    </div>
  );
};

export default LandingPage;
