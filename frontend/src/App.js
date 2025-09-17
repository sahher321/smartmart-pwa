import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Splash from './Components/Splash';
import Signin from './Components/Signin';
import Footer from './Components/Footer';
import Adminhome from './Components/Adminhome';
import Adminitem from './Components/Adminitem';
import Login from './Components/Login';
import Adminsetting from './Components/Adminsetting';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      {/*<Signin/>*/}
    {/*<Splash/>*/}
    {/*<Footer/>*/}
    {/*<Adminhome/>*/}
    {/*<Adminitem/>*/}
    {/*<Login/>*/}
    {/*<Adminsetting/>*/}
  
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
                <Splash/>
          }
        >
        </Route>
        <Route
          path="/signup"
          element={
                <Login/>
          }
        >
        </Route>
     
        <Route
          path="/login"
          element={
                <Signin/>
          }
        >
        </Route>
      
        <Route
          path="/dashboard"
          element={
                <Adminhome/>
          }
        >
        </Route>
    
        <Route
          path="/category"
          element={
                <Adminitem/>
          }
        >
        </Route>
         
        <Route
          path="/setting"
          element={
                <Adminsetting/>
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>





    </ChakraProvider>
  )
}

export default App;
