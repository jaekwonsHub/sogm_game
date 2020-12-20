import { Image, Box, Text, Button } from "@chakra-ui/react"

const LoadingViewTP = () => {
  return (
    <Box display="flex" height="100vh" flexDir="column" justifyContent="center" alignItems="center" width="100%" bgColor="#FFFFFF" >
      <Box width="80%" display="flex" height="100vh" flexDir="column" justifyContent="center" alignItems="center" maxW="720px">
        <Text margin="" fontSize="27px" fontWeight={600}>
          크잘알 능력고사
        </Text>
        <Text marginBottom="10px" fontSize="27px" fontWeight={600}>
          과연 그 결과는...?
        </Text>
        <Image border="5px solid #E6E6E6" marginTop="20px" width="100%" src={process.env.PUBLIC_URL + `/images/loading.png`} />
        <Box marginTop="7vh">
          <Text fontSize={[23, 26, 30, 34]} fontWeight={600}>점수 계산중...</Text>
        </Box>
        <Button isLoading={true} bgColor="" width="30px" height="30px">?</Button>
      </Box>
    </Box>
  )
}

export default LoadingViewTP