import { Box, Text, Button, Image } from "@chakra-ui/react"
import ResultBottom from "../2_organism/ResultBottom"
import ResultLink from "../2_organism/ResultLink"
import ResultTexts from "../2_organism/ResultTexts"
import data from "../../ data"
import React, { useState } from "react"

const ResultTP = () => {
  const count = data.correctCount
  const texts = count < 3 ? ["잠재적", "크잘알"] : count < 5 ? ["찐", "크잘알"] : ["프로", "크잘알"]
  const [makerOpened, setMakerOpened] = useState(false)
  const [imageOpened, setImageOpened] = useState(false)

  const MakerOnClick = () => {
    setMakerOpened(!makerOpened)
  }
  const ImageOnClick = () => {
    setImageOpened(!imageOpened)
  }
  const TitleFontSize = [45, 66, 95, 110]
  const subFontSize = [16, 20, 25, 30]
  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#660210">
      <Box width="100%" display="flex" flexDir="column">
        <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" flexDir="column" color="#ffffff">
          <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" position="relative" width="80%">
            <Image border="5px solid #43030C" width="100%" maxW="1000px" zIndex="0" src={process.env.PUBLIC_URL + "/images/textBackground.png"} />
            <Box height="50%" position="absolute" display="flex" flexDir="column" alignItems="center" justifyContent="center">
              <Text fontSize={[25, 35, 60, 70]} color="#005C1C">당신은</Text>
              {texts.map(text => (
                <Text lineHeight="100%" key={text + '-text-id'} fontSize={TitleFontSize} margin="" color="#FF0000">
                  {text}
                </Text>
              ))
              }
            </Box>
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginTop="5vh">
          </Box>
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Text margin="" fontSize={subFontSize}>
              문제를 풀고 나니까 왠지 막
          </Text>
            <Text margin="" fontSize={subFontSize}>
              예수님이 친근하고 그러지 않으세요?
          </Text>
            <Text margin="" fontSize={[15, 20, 25, 30]}>
              (오해하지 마세요,전도하려는거 맞아요~)
            </Text>
          </Box>
          <Box marginTop="10vh" display="flex" justifyContent="center" alignItems="center" flexDir="column">
            <Text fontSize="11px" marginBottom="3vh">스크롤을 내려주세요</Text>
            <Image src={process.env.PUBLIC_URL + "/images/downArrow.png"} />
          </Box>
        </Box>
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" marginY="8vh" color="#ffffff">
          <ResultTexts />
          <ResultLink />
        </Box>
        <Box marginBottom="1vw" display="flex" flexDir="column" alignItems="center" justifyContent="center">
          <Button
            _active={{
              bg: "",
              transform: "",
              borderColor: "",
            }} _hover={{ bg: "" }} fontSize={[17, 25, 30, 35]} margin="" onClick={MakerOnClick} bgColor="#660210" color="#ffffff">{"<"}만든이들 보기{">"}</Button>
          {makerOpened === true ? <Text marginBottom="30px"><Image src={process.env.PUBLIC_URL + "/images/downArrowOne.png"} /></Text> : ""}
        </Box>
        <Box marginBottom="10vw" display="flex" flexDir="column" alignItems="center" justifyContent="center">
          <Button
            _active={{
              bg: "",
              transform: "",
              borderColor: "",
            }} _hover={{ bg: "" }} fontSize={[17, 25, 30, 35]} margin="" onClick={ImageOnClick} bgColor="#660210" color="#ffffff">{"<"}이미지 다운받기{">"}</Button>
          {imageOpened === true ? <Text marginBottom="30px"><Image src={process.env.PUBLIC_URL + "/images/downArrowOne.png"} /></Text> : ""}
        </Box>
      </Box>
      {
        makerOpened === false ? "" :
          <Box id="bottomBox" width="100%">
            <ResultBottom />
          </Box>
      }
      {
        imageOpened === false ? "" :
          <Box width="100%" display="flex" justifyContent="center" alignItems="center" flexDir="column">
            <Box width="100%" display="flex">
              <a href={process.env.PUBLIC_URL + "/images/questions2/question1.png"} download>
                <Image src={process.env.PUBLIC_URL + "/images/questions2/question1.png"} />
              </a>
              <a href={process.env.PUBLIC_URL + "/images/questions2/question2.png"} download>
                <Image src={process.env.PUBLIC_URL + "/images/questions2/question2.png"} />
              </a>
              <a href={process.env.PUBLIC_URL + "/images/questions2/question3.png"} download>
                <Image src={process.env.PUBLIC_URL + "/images/questions2/question3.png"} />
              </a>
            </Box>
            <Box width="100%" display="flex">
              <a href={process.env.PUBLIC_URL + "/images/questions2/question4.png"} download>
                <Image src={process.env.PUBLIC_URL + "/images/questions2/question4.png"} />
              </a>
              <a href={process.env.PUBLIC_URL + "/images/questions2/question5.png"} download>
                <Image src={process.env.PUBLIC_URL + "/images/questions2/question5.png"} />
              </a>
              <a href={process.env.PUBLIC_URL + "/images/questions2/question6.png"} download>
                <Image src={process.env.PUBLIC_URL + "/images/questions2/question6.png"} />
              </a>
            </Box>
          </Box>
      }
    </Box >
  )
}

export default ResultTP