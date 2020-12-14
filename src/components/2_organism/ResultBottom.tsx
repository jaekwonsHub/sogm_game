import { Box, Text } from "@chakra-ui/react"

const ResultBottom = () => {
  return (
    <Box >
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
        <Text>만든이들</Text>
        <Text>홍보 / 진행</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              홍금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              재금
            </Text>
          </Box>
        </Box>
        <Text>사운드 팀</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              희금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              은금
            </Text>
          </Box>
        </Box>
        <Text>그래픽 팀</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              나금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              임금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Box width="80px" height="80px" border="1px solid" borderRadius="50%" />
            <Text>
              신금
            </Text>
          </Box>
        </Box>
        sogm
      </Box>
    </Box>
  )
}

export default ResultBottom