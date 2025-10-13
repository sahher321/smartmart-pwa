import React, { useState } from "react";
import "./Login.css";
import { Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  let [fullName, setfullName] = useState("");
  let [Contact, setContact] = useState("");
  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");

  const sign = async (event) => {
    event.preventDefault();

    alert(`Sign Up Succesfully!`);

    try {
      await axios.post(`http://localhost:5001/signin`, {
        fullName: fullName,
        Contact: Contact,
        Email: Email,
        Password: Password,
      });
    } catch (error) {
      console.log(error);
    }

    return;
  };

  return (
    <div>
      <img
        className="headingImg"
        src={require("../Components/SAYLANI WELFARE.png")}
        alt="SAYLANI WELFARE.png"
      />
      <img
        className="headingImg2"
        src={require("../Components/ONLINE DISCOUNT STORE.png")}
        alt="SAYLANI WELFARE.png"
      />
      <div id="form">
        <Input
          type="text"
          mt={5}
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => {
            setfullName(e.target.value);
          }}
        />
        <Input
          type="number"
          mt={5}
          placeholder="Contact"
          value={Contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <Input
          type="email"
          mt={5}
          placeholder="Email"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          mt={5}
          placeholder="Password"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button mt={5} colorScheme={"green"} onClick={sign}>
          Sign up
        </Button>
        <Link to={"/login"}>
          {" "}
          <Button m={"10%"} h={50} w={"80%"} colorScheme="green">
            Log in{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
