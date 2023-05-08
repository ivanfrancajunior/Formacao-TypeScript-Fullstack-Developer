import { Center, Flex, Spinner  } from '@chakra-ui/react'
import React, {useState,useEffect} from 'react'
import CardInfo from '../components/CardInfo'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api'

interface IUserData {
  email: string
  password: string
  name: string
  balance: number
  id:string
}

const Conta = () => {
  const dataAtual = new Date()

  const [userData, setUserData] = useState<null | IUserData>()

  useEffect(() => {
    try {
      const getData = async () => {
        const data: any | IUserData = await api
        setUserData(data)

      }
      getData()
    } catch (error) {
      console.log(error)
    }
  })

  const { id } = useParams()
  const navigate = useNavigate()

  if (userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <Center>
        <Flex  gap={8} paddingTop={16} color={'black'}  >
        {userData === undefined || userData === null ?
          (<h1> <Spinner color='#a1b567'/>  </h1>) :
          (<>
            <CardInfo mainContent={`Bem vindo de volta ${userData?.name}!`} content={`Último acesso - ${dataAtual.getDay()}/${dataAtual.getMonth()}/${dataAtual.getFullYear()}`}/>
            
            <CardInfo mainContent={`Saldo:`} content={`R$${(userData.balance).toFixed(2)}`}/>
            
          </>)}
        </Flex>
    </Center>
  )
}

export default Conta