import { Image, Box, Text } from "@chakra-ui/react"

const ResultBottom = () => {
  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Box maxW="500px" display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="5vh" color="#ffffff">
        <Text >홍보 / 진행</Text>
        <Box width="70%" display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/hongGm.png"} />
            <Text>
              홍금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/jaeGm.png"} />
            <Text>
              재금
            </Text>
          </Box>
        </Box>
        <Text marginTop="4vh">사운드 팀</Text>
        <Box width="70%" display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/heeGm.png"} />
            <Text>
              희금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/eunGm.png"} />
            <Text>
              은금
            </Text>
          </Box>
        </Box>
        <Text marginTop="4vh">그래픽 팀</Text>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/naGm.png"} />
            <Text>
              나금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/imGm.png"} />
            <Text>
              임금
            </Text>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/sinGm.png"} />
            <Text>
              신금
            </Text>
          </Box>
        </Box>
        <Text marginTop="4vh">개발 도움</Text>
        <Box width="30%" display="flex" alignItems="center" justifyContent="center">
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" margin="10px">
            <Image src={process.env.PUBLIC_URL + "/images/makers/jaeKwon.png"} />
            <Text>
              강재권
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ResultBottom