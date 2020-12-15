import { Box, Text } from "@chakra-ui/react"

const ResultLink = () => {
  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginTop="10vh" color="#ffffff">
      <Text>너도 했으면 좋겠다~</Text>
      <Text fontSize="25px" margin="10px 0px 30px 0px">크잘알 테스트 공유하기</Text>
      <Box display="flex">
        <Box width="100px" height="100px" border="1px solid" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" margin="5px">
          카카오톡
        </Box>
        <Box width="100px" height="100px" border="1px solid" borderRadius="50%" display="flex" alignItems="center" justifyContent="center" margin="5px">
          URL 복사
        </Box>
      </Box>
    </Box>
  )
}
export default ResultLink