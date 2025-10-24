import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Input, Button, Text, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import FileUploadBox from "./FileUploadBox";

function Adminsetting() {

  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {

    try {
      const response = await axios.get(`http://localhost:5001/getCategories`);
      console.log("response: ", response.data);
      setLoadProduct(!loadProduct);
      setProducts(response.data.data.reverse());
    } catch (error) {
      console.log("error in getting all categories", error);
    }

  };

  let [Name, setName] = useState("");

  const AddCategory = async (event) => {
    
    event.preventDefault();
    alert(`Category Added Succesfully!`);
    try {
      await axios.post(`http://localhost:5001/categori`, {
        Name: Name,
      });
    } catch (error) {
      console.log(error);
    }
    return;
  };

  return (
    <div>
      <Header />
      <div className="adminmain">
        <FileUploadBox />
        <Input
          placeholder="New category name"
          type="text"
          w={"90%"}
          m={"5%"}
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button colorScheme="green" w={"90%"} m={"5%"} onClick={AddCategory}>
          ADD
        </Button>

        <Text m={"5%"} className="chakra-text css-19ccm4a">
          ALL Categories
        </Text>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "5px",
          }}
        >
          {products.map((eachProduct, i) => (
            <div className="categoriesList" key={eachProduct._id}>
              <Image
                borderRadius="full"
                boxSize="70px"
                src="https://i.pinimg.com/236x/a1/7e/23/a17e23192907c8bfed8d6cb6923107e0.jpg"
                alt="Dan Abramov"
              />
              {eachProduct.Name}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Adminsetting;
