import React from "react";
import { Image, Text } from "@chakra-ui/react";
import "./Header.css";
function Header() {
  const goBack = () => {
    console.log("Back button clicked!");
    // Example: navigate to previous page
    window.history.back();
  };
  return (
    <div className="header">
      <div style={{ display: "flex", alignItems: "center" }}>
        <i className="fa-solid fa-chevron-left  fa-2x" onClick={goBack}></i>
        <Image
          borderRadius="full"
          boxSize="50px"
          src="https://i.pinimg.com/236x/a1/7e/23/a17e23192907c8bfed8d6cb6923107e0.jpg"
          alt="Dan Abramov"
          ml={5}
        />
      </div>
      <div className="name">
        <Text color={"#024F9D"} fontWeight={"bold"}>
          Mr.Raza
        </Text>
        <Text color={"green"} fontWeight={"bold"}>
          Admin
        </Text>
      </div>
      <i className="fa-solid fa-bars fa-2x"></i>
    </div>
  );
}

export default Header;
