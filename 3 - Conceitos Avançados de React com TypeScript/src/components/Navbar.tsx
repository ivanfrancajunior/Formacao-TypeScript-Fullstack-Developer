import { Flex, Button, Text, Box } from "@chakra-ui/react";
import {useContext} from 'react'
import { AppContext } from "../App";

const Navbar = () => {
    const context = useContext(AppContext)
    console.log(context)
  return (
      <Flex bg="#a1b567" p="2" justify="space-between" align="center" position="fixed" w={'full'}  >
          <Text>Logo</Text>
          <Box>
              <Button colorScheme="whiteAlpha" variant="ghost" mr="4" _hover={{ color: "red" }}>
                  Entrar
              </Button>
              <Button colorScheme="whiteAlpha" variant="ghost" _hover={{ color: "red" }}>
                  Sair
              </Button>
          </Box>

      </Flex>
  )
}

export default Navbar