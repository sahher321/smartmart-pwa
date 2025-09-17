import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Text,Input, Select, Textarea, Button } from '@chakra-ui/react'
import axios from "axios";
function Adminitem() {
  let [Name,setName] = useState('');
  let [Des,setDes] = useState('');
  let [unitName,setunitName] = useState('');
  let [price,setprice] = useState('');
  let [cat,setcat] = useState('');

  //console.log(Name,Des,unitName,price,cat);
  const getdata= async (event)=>{
    event.preventDefault();
    
    alert(`Product Added Succesfully!`)
 
    try {
      await  axios.post(`http://localhost:5001/productData`, {
        Name:Name,
        Des: Des,
        unitName: unitName,
        price: price,
        cat:cat,
        
      })
    
    } catch (error) {
      console.log(error)
    }
    
    return;
    
    }


  return (
   <div>
   <Header/>
   <div className='adminmain'>
   <Text p={5} color={'#024F9D'} fontWeight={'bold'}>
          All New Itmes
        </Text>
        <Input type='file' w={'90%'} h={120} ml={'5%'} />
        <Input  placeholder='Item name' type='text' w={'90%'} m={'5%'} value={Name}
        onChange={(e)=>
          {
            setName(e.target.value)
          }
        }/>
        <Input placeholder=' Category' w={'90%'} m={'5%'}
         value={cat}
         onChange={(e)=>
           {
             setcat(e.target.value)
           }
         }
        />
        <Textarea type='text' placeholder='Describe this item' w={'90%'} h={120} m={'5%'}
        value={Des}
        onChange={(e)=>
          {
            setDes(e.target.value)
          }
        }/>
        <div className='detail'><Text color={'#024F9D'} fontWeight={'bold'}>Unit Name:</Text><Input type='text' w={'60%'}
           value={unitName}
        onChange={(e)=>
          {
            setunitName(e.target.value)
          }
        } /></div>
        <div className='detail'><Text color={'#024F9D'} fontWeight={'bold'}>Unit Price:</Text><Input type='text' w={'60%'} 
           value={price}
        onChange={(e)=>
          {
            setprice(e.target.value)
          }
        }/></div>
        <Button colorScheme='green' w={'80%'} ml={'12%'} mt={'5%'} onClick={getdata}>Add Product</Button>
   </div>
   
<Footer/>
   
 </div>
  )
}

export default Adminitem
