import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";

function Adminhome() {

  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false);
  
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/products`);
        console.log("response: ", response.data);
        setLoadProduct(!loadProduct);
        setProducts(response.data.data.reverse());
      } catch (error) {
        console.log("error in getting all products", error);
      }
    };

    getAllProducts();
  }, []);

  return (
    
    <div>
      <Header />
      <Carousel />
      <div className="adminmain">
        <Text p={5} color={"#024F9D"} fontWeight={"bold"}>
          All Products
        </Text>
        <div className="adminpro">
          {products.map((eachProduct, i) => (
            <div className="products" key={eachProduct._id}>
              <Image
                borderRadius="full"
                boxSize="70px"
                src="https://i.pinimg.com/236x/a1/7e/23/a17e23192907c8bfed8d6cb6923107e0.jpg"
                alt="Dan Abramov"
              />

              <div className="productname">
                <Text color={"green"} fontWeight={"bold"}>
                  {eachProduct.Productname}
                </Text>
                <Text color={"gray"} fontWeight={"bold"}>
                  {eachProduct.Des}
                </Text>
              </div>
              <Text color={"gray"}>${eachProduct.price}</Text>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>

  );
}

export default Adminhome;
