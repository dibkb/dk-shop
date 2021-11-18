import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
const LandingPage = () => {
  const imageLink =
    "https://images7.alphacoders.com/118/thumb-1920-1188302.jpg";
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
      <h1>DK   TECH    STORE</h1>
      <Link to = '/items'>
         <button>Visit Store</button></Link>
    </div>
  );
};

export default LandingPage;
