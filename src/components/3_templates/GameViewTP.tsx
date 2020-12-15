import { Box, Text, Button, Img } from "@chakra-ui/react"
import React, { FC } from "react"
import data from "../../ data"

interface IGameViewTPProps {
  onClick?: any;
  id: string;
  selected?: string;
}

const GameViewTP: FC<IGameViewTPProps> = ({ onClick, id, selected }) => {
  const stage = data.stages.filter(e => e.id === id)[0];
  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#006620">
      <Box width="80%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop="30px">
        <Text fontSize="80px" margin="" color="#ffffff">Q{stage.stage}</Text>
        <Text fontSize="30px" margin="" color="#ffffff">{stage.question[0]}</Text>
        <Text fontSize="30px" margin="20px" color="#ffffff">{stage.question[1]}</Text>
        <Text fontSize="30px" margin="" color="#ffffff">{stage.question[2]}</Text>
        <Img border="1px solid" width="80%" height="40vh" />
        <Button bgColor="white" border="2px solid" width="80%" height="10vh" margin="20px" onClick={onClick}>{stage.selections[0].title}</Button>
        <Button bgColor="white" border="2px solid" width="80%" height="10vh" onClick={onClick}>{stage.selections[1].title}</Button>
      </Box>
    </Box>
  )
}

export default GameViewTP
