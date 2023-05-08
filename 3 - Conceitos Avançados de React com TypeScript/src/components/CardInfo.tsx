import { Box, Text } from '@chakra-ui/react'
interface IcardInfo{
  mainContent: string,
  content: string
}
const CardInfo = ({mainContent, content}: IcardInfo) => {
  return (
      <Box backgroundColor={`white`} minHeight={120} padding={8} borderRadius={15}>
      <Text  fontSize={'2xl'} fontWeight={800} >{ mainContent}</Text>
      <Text fontSize={'xl'}>{ content}</Text>
    </Box>
  )
}

export default CardInfo