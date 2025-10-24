import React from "react";
import { Image, Input, Button, Text } from "@chakra-ui/react";
import "./Signin.css";
import { Link } from "react-router-dom";

function Signin() {
  return (

    <div>
      <div className="upperlogo">
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
      <div className="form">
        <Input variant="flushed" placeholder="Email" h={70} />
        <Input variant="flushed" placeholder="Password" h={70} />
        <Text color={"#024F9D"} mt={2}>
          Forget Password?
        </Text>
      </div>
        <Link to={"/dashboard"}>
        {" "}
        <Button m={"10%"} h={50} w={"80%"} colorScheme="green">
          Log in{" "}
        </Button>
          </Link>
      <Link to={"/signup"}>
        {" "}
        <Button m={"10%"} h={50} w={"80%"} colorScheme="green">
          Sign Up{" "}
        </Button>
      </Link>
    </div>
    
  );
}

export default Signin;
