import { Box, Text } from "@chakra-ui/react"
import ResultBottom from "../2_organism/ResultBottom"
import ResultLink from "../2_organism/ResultLink"
import ResultTexts from "../2_organism/ResultTexts"

const ResultTP = () => {

  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Text>
        당신은
      </Text>
      <Text>
        프로 크잘알
      </Text>
      <Text>
        아니 어쩜 이리 잘 알고 있는 것이죠?
      </Text>
      <Text>
        7점
      </Text>
      <ResultTexts />
      <ResultLink />
      <ResultBottom />
    </Box>
  )
}

export default ResultTP