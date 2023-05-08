import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Header } from './components/Header';
import { Card } from './components/Card'

function App() {




  return (
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
        <Header />
        <Card/>

      </Flex>
    </ChakraProvider>
  );
}

export default App;
