import { Box, Text, Button, Img } from "@chakra-ui/react"
import React, { FC } from "react"
import data from "../../ data"

interface IGameViewTPProps {
  onClick?: any;
  id: string;
}

const GameViewTP: FC<IGameViewTPProps> = ({ onClick, id }) => {
  const stage = data.stages.filter(e => e.id === id)[0];
  return (
    <Box width="100%" display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Box width="100%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop="30px">
        <Text fontSize="80px" margin="">Q{stage.stage}</Text>
        <Text fontSize="30px" margin="20px">{stage.question}</Text>
        <Img border="1px solid" width="80%" height="40vh" />
        <Button bgColor="white" border="2px solid" width="80%" height="10vh" margin="20px" onClick={onClick}>{stage.selections[0].title}</Button>
        <Button bgColor="white" border="2px solid" width="80%" height="10vh" onClick={onClick}>{stage.selections[1].title}</Button>
      </Box>
    </Box>
  )
}

export default GameViewTP
