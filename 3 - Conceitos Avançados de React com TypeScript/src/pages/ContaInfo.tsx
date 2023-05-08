import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ContaInfo = () => {
  return (
      <div>
          <Flex direction={'column'} margin={16} justifyItems={'center'} alignItems={'center'}>
            <Text fontSize={22} fontWeight={800} paddingBottom={20}>
              Informações da conta
            </Text>
              <Text fontSize={18} color={'blue.300'} border={'2px'} padding={2} borderRadius={"8px"}>
                <Link to={'/conta/1'}> Clique aqui  </Link>
              </Text>
          </Flex>
    </div>
  )
}

export default ContaInfo