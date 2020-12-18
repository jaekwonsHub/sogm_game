import { Box, Text } from "@chakra-ui/react"

const TitleGroup = () => {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Box width="100%" border="1px solid" >
        <Text fontSize="30px" fontWeight={800} >
          2020성탄특집
      </Text>
      </Box>
      <Text fontSize="30px" fontWeight={800} >
      </Text>
    </Box>
  )
}

export default TitleGroup