import { Box, Text } from "@chakra-ui/react"

const ResultTexts = () => {
  const fontSize = [18, 25, 30, 40]
  const largeFont = [28, 36, 39, 47]
  const margin = "5px"
  const topTextMargin = "3vh"
  const boxMargin = [20, 20, 24, 24]
  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center" color="#ffffff" marginTop="50px">
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={largeFont} marginBottom={topTextMargin}>
          올 한해 너무 힘드셨죠?
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          안그래도 힘들고 지치게하는
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          일들이 너무 많은데..
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          코로나까지 ㅠ
      </Text>
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          만만치 않은 2020년을 마무리
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          하는 당신에게 먼저 토닥토닥,
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          위로의 메세지를 남깁니다.
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          그래도 크리스마스만 생각하면
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          왠지 신나지 않나요? ㅎㅎ
        </Text>
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={largeFont} margin={margin}>
          맞아요!
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          크리스마스는 그런
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          기쁨이 시작된 날이에요^0^
      </Text>

      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          예수님께서 당신을 누구보다
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          사랑하셔서 당신의
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          기쁨과 슬픔, 그리고
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          모든 것을 함께 하기 위해
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          직접 찾아오신 날이랍니다.
      </Text>

      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          당신에게 평안을 주기 위해
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          이 땅에 오신 예수님의 마음을
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          느낄 수 있는 따뜻한
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          크리스마스가 되길 기도합니다!
      </Text>
      </Box>
    </Box>
  )
}
export default ResultTexts