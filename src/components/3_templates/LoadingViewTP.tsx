import { Box, Text, Button } from "@chakra-ui/react"

const LoadingViewTP = () => {
  return (
    <Box display="flex" height="97vh" flexDir="column" justifyContent="center" alignItems="center" width="100%" bgColor="#006620" >
      <Box display="flex" height="100vh" flexDir="column" justifyContent="center" alignItems="center" width="100%" maxW="720px">
        <Text margin="5px" fontSize="27px">
          당신의
      </Text >
        <Text margin="5px" fontSize="27px">
          크잘알 능력고사
      </Text>
        <Text margin="5px" fontSize="27px">
          과연 그 결과는..?
      </Text>
        <Box width="50%" height="40vh" border="1px solid">
          천사 GIF 자리
      </Box>
        <Text>점수 계산중...</Text>
        <Button isLoading={true} bgColor="" width="30px" height="30px">?</Button>
      </Box>
    </Box>
  )
}

export default LoadingViewTP