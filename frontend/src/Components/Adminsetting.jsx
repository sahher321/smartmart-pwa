import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Input, Button, Text, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import axios from "axios";
function Adminsetting() {


  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  useEffect(() => {


    getAllProducts()



  }, [])

    const getAllProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/getCategories`);
        console.log("response: ", response.data);
        setLoadProduct(!loadProduct)
        setProducts(response.data.data.reverse());
      } catch (error) {
        console.log("error in getting all categories", error);
      }
    };
    
  let [Name, setName] = useState('');
  const Addcat = async (event) => {
    event.preventDefault();

    alert(`Category Added Succesfully!`)

    try {
      await axios.post(`http://localhost:5001/categori`, {
        Name: Name
      })

    } catch (error) {
      console.log(error)
    }

    return;

  }




  return (
    <div>
      <Header />
      <div className='adminmain'>
        <Input type='file' w={'90%'} h={120} m={'5%'} />
        <Input placeholder='New category name' type='text' w={'90%'} m={'5%'} value={Name}
          onChange={(e) => {
            setName(e.target.value)
          }
          } />
        <Button colorScheme='green' w={'80%'} ml={'12%'} mt={'5%'} onClick={Addcat} >ADD</Button>

        <Text color={'blue'} m={'5%'} fontWeight={'bold'}>ALL Categories</Text>

        {/*<div className='products'>
        <Image
  borderRadius='full'
  boxSize='70px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  ml={5}
/>
      
      </div>*/}
        {products.map((eachProduct, i) => (
          <div className='products' key={eachProduct._id}>

            <Image
              borderRadius='full'
              boxSize='70px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              ml={5}
            />
            {eachProduct.Name}
          </div>
        ))}
      </div>

      <Footer />

    </div>
  )
}

export default Adminsetting
