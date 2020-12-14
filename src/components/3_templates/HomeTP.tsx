import { Box, Text } from "@chakra-ui/react"
import { FunctionComponent } from "react"
import ButtonForm from "../0_atoms/ButtonForm"


interface IHomeTPProps {
  onClick?: any;
}

const HomeTP: FunctionComponent<IHomeTPProps> = ({
  onClick
}) => {

  return (
    <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box width="100%" maxW="1000px" height="100vh" display="flex" justifyContent="center" alignItems="center" flexDir="column">
        <Text fontSize="20px" color="#707070">2020성탄특집</Text>
        <Text fontSize="70px" margin="" color="#707070">크잘알</Text>
        <Text fontSize="50px" margin="" marginBottom="70px" color="#707070">능력고사</Text>
        <Text fontSize="16px" color="#707070">크리스마스에 대해</Text>
        <Text fontSize="16px" color="#707070">얼마나 알고 있는지 알아볼까?!</Text>
        <ButtonForm onClick={onClick}>시작하기</ButtonForm>
      </Box>
    </Box>
  )
}
export default HomeTP