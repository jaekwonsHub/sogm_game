import { Image, Box, Text } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import ButtonForm from "../0_atoms/ButtonForm"
import HomeTitle from "../1_molecules/HomeTitle"

interface IHomeTPProps {
  onClick?: any;
}

const HomeTP: FunctionComponent<IHomeTPProps> = ({
  onClick
}) => {

  return (
    <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" bgColor="#006620">
      <Box width="100%" maxW="720px" height="100vh" marginTop="30px" display="flex" justifyContent="center" alignItems="center" flexDir="column">
        <HomeTitle />
        <Box position="relative" width="80%" margin="20px 0px" height="40vh" display="flex" justifyContent="center" alignItems="center" flexDir="column">
          <Text zIndex="1" fontSize={[60, 70, 80, 90]} fontWeight="700" margin="" color="#FF0000">크잘알</Text>
          <Text zIndex="1" fontSize={[40, 60, 70, 80]} fontWeight="700" margin="" color="#005C1C">능력고사</Text>
          <Image width="80%" minW="300px" position="absolute" zIndex="0" src={process.env.PUBLIC_URL + "/images/textBackground.png"}></Image>
        </Box>
        <Text fontSize="16px" fontWeight="500" color="#ffffff" >크리스마스에 대해</Text>
        <Text fontSize="16px" fontWeight="500" color="#ffffff" >얼마나 알고 있는지 알아볼까요?!</Text>
        <ButtonForm onClick={onClick}>시작하기</ButtonForm>
      </Box>
    </Box>
  )
}

export default HomeTP