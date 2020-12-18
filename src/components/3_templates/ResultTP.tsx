import { Box, Text, Button } from "@chakra-ui/react"
import ResultBottom from "../2_organism/ResultBottom"
import ResultLink from "../2_organism/ResultLink"
import ResultTexts from "../2_organism/ResultTexts"
import data from "../../ data"
import { useState } from "react"

const ResultTP = () => {
  const count = data.correctCount
  const texts = count < 3 ? ["잠재적", "크잘알"] : count < 5 ? ["찐", "크잘알"] : ["프로", "크잘알"]
  const [opened, setOpened] = useState(false)
  const onClick = () => {
    setOpened(!opened)
  }
  const TitleFontSize = [65, 70, 100, 120]
  const subFontSize = [18, 20, 25, 30]
  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#660210">
      <Box display="flex" height="100vh" flexDir="column" alignItems="center" justifyContent="center">
        <Text marginTop="10vh" fontSize="25px" color="#ffffff">
          당신은
      </Text>
        {texts.map(text => (
          <Text key={text + '-text-id'} fontSize={TitleFontSize} margin="" color="#ffffff">
            {text}
          </Text>
        ))
        }
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginY="8vh" color="#ffffff">
          <Text margin="" fontSize={subFontSize}>
            문제를 풀고 나니까 왠지 막
          </Text>
          <Text margin="" fontSize={subFontSize}>
            예수님이 친근하고 그러지 않으세요?
          </Text>
          <Text margin="" fontSize={subFontSize}>
            (오해하지 마세요,전도하려는거 맞아요~)
          </Text>
        </Box>
        <Button onClick={onClick}>펼쳐보기</Button>
      </Box>
      {
        opened === false ? "" :
          <Box width="100%">
            <ResultTexts />
            <ResultLink />
            <ResultBottom />
          </Box>
      }
    </Box>
  )
}

export default ResultTP