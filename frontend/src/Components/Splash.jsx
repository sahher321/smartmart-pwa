import React from "react";
import logo from "../Components/logo.png";
import "./Splash.css";
import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Splash() {
  return (
    <div className="main">
      
      <div className="logodiv">
        <Image mt={"5"} src={logo} alt="" className="logo" />
        <Image
          mt={"5"}
          src={require("../Components/SAYLANI WELFARE.png")}
          alt=""
        />
        <Image
          mt={"5"}
          src={require("../Components/ONLINE DISCOUNT STORE.png")}
          alt=""
        />
      </div>

      <div className="btnsplash">
        <Link to="/signup">
          <Button colorScheme="green">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}

export default Splash;
