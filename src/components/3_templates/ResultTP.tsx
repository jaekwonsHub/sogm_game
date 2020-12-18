import { Box, Text } from "@chakra-ui/react"
import ResultBottom from "../2_organism/ResultBottom"
import ResultLink from "../2_organism/ResultLink"
import ResultTexts from "../2_organism/ResultTexts"
import data from "../../ data"

const ResultTP = () => {
  const count = data.correctCount
  console.log(count)
  const texts = count < 3 ? ["잠재적", "크잘알"] : count < 5 ? ["찐", "크잘알"] : ["프로", "크잘알"]

  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#660210">
      <Text marginTop="10vh" fontSize="25px" color="#ffffff">
        당신은
      </Text>
      <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
        {texts.map(text => (
          <Text key={text + '-text-id'} fontSize="60px" margin="" color="#ffffff">
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