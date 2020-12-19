import { Box, Text } from "@chakra-ui/react"

const HomeTitle = () => {
  return (
    <Box marginTop="7vh" display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Text fontSize="30px" fontWeight={500} color="#ffffff" lineHeight="3" margin="">2020</Text>
      <Text fontSize="30px" fontWeight={500} color="#ffffff" margin="">성탄특집</Text>
    </Box >
  )
}

export default HomeTitle