
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react'

import Home from './pages/Home';
import Conta from './pages/Conta';

import ContaInfo from './pages/ContaInfo';
import Navbar from './components/Navbar';
import { createContext } from 'react'

interface IAppContext{
  user:string
}
export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({ children }:any) => {
  const user = 'Jota'
  return (
    <AppContext.Provider value={{ user }}>
        {children}
      </AppContext.Provider>
    )
    
  }
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
