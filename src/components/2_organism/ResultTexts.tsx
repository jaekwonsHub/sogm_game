import { Box, Text } from "@chakra-ui/react"

const ResultTexts = () => {
  const fontSize = [18, 25, 30, 40]
  const margin = "5px"
  const boxMargin = [20, 20, 24, 24]
  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center" color="#ffffff" marginTop="50px">
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          올 한해 너무 힘드셨죠?
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          안그래도 힘들고 지치게하는 일들이
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          너무 많은데.. 코로나까지 ㅠ
      </Text>
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          만만치 않은 2020년을 마무리하는
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          당신에게 먼저 토닥토닥, 위로의 메세지를
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          남깁니다. 그래도 크리스마스만 생각하면
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          왠지 신나고 힘이 나지않나요?
        </Text>
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          맞아요! 크리스마스는
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          그런 기쁨이 시작 된 날이에요^0^
      </Text>
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          당신을 그 누구보다 사랑하셔서
        </Text>
        <Text fontSize={fontSize} margin={margin}>
          당신이 느끼는 기쁨부터 어려움과 슬픔까지
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          그 모든 것을 함께 하시기 위해
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          직접 하늘에서 이 땅으로 찾아오신 날이에요.
      </Text>
      </Box>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginBottom={boxMargin}>
        <Text fontSize={fontSize} margin={margin}>
          세상에 평안을 주기 위해 오신 예수님의
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          마음을 느낄 수 있는 따뜻한 크리스마스가
      </Text>
        <Text fontSize={fontSize} margin={margin}>
          되길 바라요!!!
      </Text>
      </Box>
      <Text fontSize={fontSize} margin={margin}>
        메리 크리스마스!
      </Text>
    </Box>
  )
}
export default ResultTexts