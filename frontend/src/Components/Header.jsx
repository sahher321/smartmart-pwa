import React from 'react'
import { Image,Text } from '@chakra-ui/react'
import './Header.css';
function Header() {
  return (
   <div className='header' >
 <i className="fa-solid fa-chevron-left  fa-2x"></i>
 <Image
  borderRadius='full'
  boxSize='80px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  ml={5}
/>
<div className='name'>
 <Text color={'#024F9D'} fontWeight={'bold'}>
  Mr.Ahmed
 </Text>
 <Text color={'green'} fontWeight={'bold'}>
   Admin
 </Text>

</div>
<i className="fa-solid fa-bars fa-2x"></i>
    </div>
  )
}

export default Header
