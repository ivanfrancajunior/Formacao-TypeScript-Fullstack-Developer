
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react'

import Home from './pages/Home';
import Conta from './pages/Conta';

import ContaInfo from './pages/ContaInfo';
import Navbar from './components/Navbar';
import {AppContextProvider} from './components/AppContext'

  function App() {
  
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppContextProvider>
          <Navbar/>
          <Flex
            minHeight='100vh'
            minWidth={'100%'}
            backgroundColor='#1e1e1e'
            alignItems={'center'}
            color='white'
            padding='25px'
            direction={"column"}
            >
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/conta/:id' element={<Conta />} />
              <Route path='/info' element={<ContaInfo/>} />
            </Routes>        
          </Flex>
            </AppContextProvider>
        </ChakraProvider>   
    </BrowserRouter>
  );
}

export default App;
