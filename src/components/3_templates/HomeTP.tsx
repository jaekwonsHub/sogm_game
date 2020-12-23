import { Image, Box, Text } from "@chakra-ui/react"
import React, { FunctionComponent, useState } from "react"
import ButtonForm from "../0_atoms/ButtonForm"
import HomeTitle from "../1_molecules/HomeTitle"

interface IHomeTPProps {
  onClick?: any;
}
const HomeTP: FunctionComponent<IHomeTPProps> = ({
  onClick
}) => {

  const [iconInterval, setIconInterval] = useState(false)
  setInterval(() => setIconInterval(!iconInterval), 1000)

  return (
    <Box width="100%" height="100vh" display="flex" flexDir="column" alignItems="center" justifyContent="space-around" bgColor="#006620">
      <Box width="80%" display="flex" justifyContent="center" alignItems="center" position="relative">
        {iconInterval === true ? <Image position="absolute" left="4vw" src={process.env.PUBLIC_URL + "/images/homeIcon.png"} /> : ""}
        <HomeTitle />
      </Box>
      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" position="relative" width="80%">
        <Image margin="3vh" border="5px solid #023014" width="100%" maxW="500px" zIndex="0" src={process.env.PUBLIC_URL + "/images/textBackground.png"} />
        <Box height="50%" position="absolute" display="flex" flexDir="column" alignItems="center" justifyContent="center">
          <Text fontSize={[60, 70, 80, 90]} fontWeight={500} color="#FF0000" lineHeight="5vh" marginTop="5vh">크잘알</Text>
          <Text fontSize={[40, 40, 50, 60]} fontWeight={500} color="#005C1C" lineHeight="" margin="">테스트</Text>
        </Box>
      </Box>
      <Box marginTop="3vh" display="flex" flexDir="column" justifyContent="center" alignItems="center" >
        <Text fontSize="16px" fontWeight="500" color="#ffffff" >크리스마스에 대해</Text>
        <Text fontSize="16px" fontWeight="500" color="#ffffff" >얼마나 알고 있는지 알아볼까요?!</Text>
      </Box>
      <ButtonForm onClick={onClick}>시작하기</ButtonForm>
      <Text marginBottom="5vh" color="#ffffff" fontSize={[10, 15, 20, 25]}>*해당 테스트는 모바일에 최적화 되어있습니다.*</Text>

    </Box >
  )
}

export default HomeTP