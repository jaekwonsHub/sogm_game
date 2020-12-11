import { Box, Text, Button, Img } from "@chakra-ui/react"
import { RouteComponentProps } from "react-router-dom"
import React, { FC } from "react"
import data from "../../ data"

interface MatchParams {
  id: string;
}

interface IGameViewTPProps extends RouteComponentProps<MatchParams> {
  onClick?: any;

}

const GameViewTP: FC<IGameViewTPProps> = ({ onClick, match }) => {
  console.log(match.params)
  const { id } = match.params
  console.log(id)
  return (
    <Box width="100%" height="100vh" maxW="1000px" display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Text fontSize="80px" margin="">Q1</Text>
      <Text fontSize="30px" margin="20px">{data.stages[0].question}</Text>
      <Img border="1px solid" width="80%" height="40vh" />
      <Button bgColor="white" border="2px solid" width="80%" height="10vh" margin="20px" onClick={onClick}>{data.stages[0].selections[0].title}</Button>
      <Button bgColor="white" border="2px solid" width="80%" height="10vh" onClick={onClick}>{data.stages[0].selections[1].title}</Button>
    </Box>
  )
}

export default GameViewTP
