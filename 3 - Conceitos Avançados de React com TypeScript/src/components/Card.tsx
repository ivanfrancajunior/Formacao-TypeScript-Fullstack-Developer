import { Text, Input, Flex, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { greeting } from '../services/greeting';
import { api } from "../services/api"; 

export const Card = () => {
  
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect (() => {
     try {
      const getData = async () => {
        const data = await api
        console.log(data)
        
    }
    getData()
     } catch (error) {
      console.log(error)
     }
  })
  

  return (
    <Flex direction={"column"}
      alignItems="center"
      minHeight={'469px'}
      minWidth={'320px'}
      padding={90}
      borderRadius={10}
      fontSize={24}
      backgroundColor={'#fff'}
       >
      <Flex
      direction={"column"} alignItems={'center'} >
        <Text marginBottom={45} fontSize={20} color={"black"} >
          Faça seu login
        </Text>
        <Input placeholder={'Email'} marginBottom={3} type='text' color={"black"} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder={'Senha'} marginBottom={3} type='password' color={"black"} value={password } onChange={(e) => setPassword(e.target.value)}/>
        <Button color={"black"} backgroundColor={'#a1b567'} onClick={() => greeting(email)}> Acessar</Button>
     </Flex>
    </Flex>
  )
}