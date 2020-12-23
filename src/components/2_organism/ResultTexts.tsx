import { Box, Text, Image } from "@chakra-ui/react"

const ResultTexts = () => {
  const fontSize = [16, 25, 30, 40]
  const largeFont = [22, 27, 32, 45]
  const margin = "5px"
  const topTextMargin = "3vh"
  const boxMargin = [20, 20, 24, 24]
  return (
    <Box width="80%" border="5px solid #43030C" display="flex" flexDir="column" alignItems="center" justifyContent="center" color="#000000" marginTop="50px" bgColor="white">
      <Box width="85%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Image width="80%" height="7vw" marginY="8vh" src={process.env.PUBLIC_URL + "images/resultLetterImage.png"} />
        <Text fontSize={largeFont} marginBottom={topTextMargin}>
          올 한해 너무 힘드셨죠?
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          안그래도 힘들고 지치게하는
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          일들이 너무 많은데..
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          코로나까지 ㅠ
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
      </Box>
      <Box width="85%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          만만치 않은 2020년을 마무리
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          하는 당신에게 먼저 토닥토닥,
        </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          위로의 메세지를 남깁니다.
        </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          그래도 크리스마스만 생각하면
        </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          왠지 신나지 않나요? ㅎㅎ
        </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
      </Box>
      <Box width="85%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={largeFont} margin={margin}>
          맞아요!
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          크리스마스는 그런
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          기쁨이 시작된 날이에요^0^
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>

      </Box>
      <Box width="85%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          예수님께서 당신을
        </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          누구보다 사랑하셔서
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          당신의 기쁨과 슬픔,
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          그 모든 것을 함께 하기 위해
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          직접 찾아오신 날이랍니다.
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>

      </Box>
      <Box width="85%" display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          당신에게 평안을 주기 위해
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          이 땅에 오신
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          예수님의 마음을 느낄 수 있는
      </Text>
        <Box width="100%" height="1px" bgColor="#000000"></Box>
        <Text fontSize={fontSize} margin={margin}>
          크리스마스가 되길 기도합니다!
      </Text>
        <Image width="80%" height="7vw" marginTop="8vh" src={process.env.PUBLIC_URL + "/images/resultLetterImage.png"} />
      </Box>
    </Box>
  )
}
export default ResultTexts