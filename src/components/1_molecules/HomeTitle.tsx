import { Box, Text } from "@chakra-ui/react"

const HomeTitle = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Text fontSize="30px" fontWeight="700" color="#ffffff" margin="">2020</Text>
      <Text fontSize="30px" fontWeight="700" color="#ffffff" margin="">성탄특집</Text>
    </Box>
  )
}

export default HomeTitle