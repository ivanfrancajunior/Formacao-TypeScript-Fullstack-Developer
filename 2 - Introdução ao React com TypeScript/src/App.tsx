import { ChakraProvider, Input, Box, Center, Wrap } from "@chakra-ui/react"

function App() {

  return (
    <ChakraProvider >
      <Box minHeight={'100vh'} backgroundColor={'#171717'} color={'white'} padding={'25px'} >  
        <Center>

          <Wrap backgroundColor={'#d48372'} borderRadius={'16px'} padding={'25px'} width={780} height={'65vh'} marginTop={100}>
              <h1>Faça Login</h1>
            <Box display="flex" alignItems="center" justifyContent="center" flexDir={"column"}  width={780} >
              
              <Input placeholder="email" size={"md"} backgroundColor={'#494949'} />
              <Input placeholder="password" size={"md"}/>
            </Box>
          </Wrap>  
        </Center>
      </Box>
    </ChakraProvider>
  )
}

export default App
