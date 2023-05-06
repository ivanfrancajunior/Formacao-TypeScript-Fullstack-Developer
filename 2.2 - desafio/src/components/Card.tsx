import { Text, Input, Flex, Button } from "@chakra-ui/react"
interface IProp {
  onClick: () => void
}

export const Card = ( {onClick}:IProp  ) => {
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
        <Input placeholder={'Email'} marginBottom={3} type='text' />
        <Input placeholder={'Senha'} marginBottom={3} type='password'/>
        <Button color={"black"} backgroundColor={'#a1b567'} onClick={onClick}> Acessar</Button>
     </Flex>
    </Flex>
  )
}