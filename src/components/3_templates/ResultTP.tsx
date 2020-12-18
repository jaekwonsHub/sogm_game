import { Box, Text } from "@chakra-ui/react"
import ResultBottom from "../2_organism/ResultBottom"
import ResultLink from "../2_organism/ResultLink"
import ResultTexts from "../2_organism/ResultTexts"

const ResultTP = () => {
  const texts = ["프로", "크잘알"]

  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#660210">
      <Text marginTop="10vh" fontSize="25px" color="#ffffff">
        당신은
      </Text>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
        {texts.map(text => (
          <Text fontSize="60px" margin="" color="#ffffff">
            {text}
          </Text>
        ))}
      </Box>
      <ResultTexts />
      <ResultLink />
      <ResultBottom />
    </Box>
  )
}

export default ResultTP