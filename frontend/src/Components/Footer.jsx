import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
       <Link to={"/dashboard"}>
        <i className="fa-solid fa-house fa-2x"></i>
       </Link>
       <Link to={"/category"}>
        <i className="fa-solid fa-plus fa-2x"></i>
       </Link>
       <Link to={"/setting"}>
        <i className="fa-solid fa-user fa-2x"></i>
       </Link>
    </div>
  );
}

export default Footer;
