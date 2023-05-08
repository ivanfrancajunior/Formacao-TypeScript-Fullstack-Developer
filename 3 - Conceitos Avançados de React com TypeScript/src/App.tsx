
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import ContaInfo from './pages/ContaInfo';

function App() {

  return (
    <BrowserRouter>
        <ChakraProvider>
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
        </ChakraProvider>   
    </BrowserRouter>
  );
}

export default App;
