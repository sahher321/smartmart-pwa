import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Text, Input, Select, Textarea, Button } from "@chakra-ui/react";
import axios from "axios";
import FileUploadBox from "./FileUploadBox";
import SelectBox from "./SelectBox";
import { set } from "mongoose";
function Adminitem() {
  let [Name, setName] = useState("");
  let [Des, setDes] = useState("");
  let [unitName, setunitName] = useState("");
  let [price, setprice] = useState("");
  let [cat, setcat] = useState("");

  //console.log(Name,Des,unitName,price,cat);
  const getdata = async (event) => {
    event.preventDefault();

    alert(`Product Added Succesfully!`);

    try {
      await axios.post(`http://localhost:5001/productData`, {
        Name: Name,
        Des: Des,
        unitName: unitName,
        price: price,
        cat: cat,
      });
    } catch (error) {
      console.log(error);
    }

    return;
  };

  const [options, setOptions] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/getCategories`);
      console.log("response: ", response.data);

      // Map categories into { value, label }
      const formattedOptions = response.data.data.map((cat) => ({
        value: cat.Name,
        label: cat.Name,
      }));

      setOptions(formattedOptions);
    } catch (error) {
      console.log("error in getting all categories", error);
    }
  };

  const handleSelect = (value) => {
    alert("You selected: " + value);
    setcat(value);
  };

  return (
    <div>
      <Header />
      <div className="adminmain">
        <Text p={5} color={"#024F9D"} fontWeight={"bold"}>
          All New Itmes
        </Text>
        <FileUploadBox />
        <Input
          placeholder="Item name"
          type="text"
          w={"90%"}
          m={"5%"}
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
           <SelectBox label="Category" options={options} onChange={handleSelect} />
        <Textarea
          type="text"
          placeholder="Describe this item"
          w={"90%"}
          h={120}
          m={"5%"}
          value={Des}
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Unit Name: eg. 500g, 1L, 1pc"
          w={"90%"}
          m={"5%"}
          value={unitName}
          onChange={(e) => {
            setunitName(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Price"
          w={"90%"}
          m={"5%"}
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <Button colorScheme="green" w={"90%"} m={"5%"} onClick={getdata}>
          Add Product
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Adminitem;
