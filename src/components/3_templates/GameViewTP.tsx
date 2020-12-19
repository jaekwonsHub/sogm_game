import { Box, Text, Button, Image } from "@chakra-ui/react"
import React, { FC } from "react"
import data from "../../ data"

interface IGameViewTPProps {
  onClick?: any;
  id: string;
  selected?: string;
}

const GameViewTP: FC<IGameViewTPProps> = ({ onClick, id }) => {
  const stage = data.stages.filter(e => e.id === id)[0];
  console.log(stage)
  return (
    <Box width="100%" height="100vh" display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#006620">
      <Box width="84%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop="7vh">
        <Text fontSize={["50px", "55px", "65px", "75px"]} fontWeight="500" margin="" color="#ffffff">Q{stage.stage}</Text>
        <Text fontSize={["25px", "45px", "50px", "60px"]} fontWeight="600" margin="" color="#ffffff">{stage.question[0]}</Text>
        <Text fontSize={["25px", "45px", "50px", "60px"]} fontWeight="600" margin="" color="#ffffff">{stage.question[1]}</Text>
        <Text fontSize={["25px", "45px", "50px", "60px"]} fontWeight="600" margin="" color="#ffffff">{stage.question[2]}</Text>
        <Image border="3px solid" marginTop="20px" width="100%" height="40vh" src={process.env.PUBLIC_URL + `/images/questions/question${stage.stage}.png`} />
        <Button fontSize={[16, 20, 23, 30]} bgColor="white" border="3px solid" width="100%" height="10vh" margin="20px" onClick={() => onClick(0)} display="flex" flexDir="column">
          {stage.selections[0].title.map(text => <Text key={text + '-text-id'} margin="">{text}</Text>)}
        </Button>
        <Button fontSize={[16, 20, 23, 30]} bgColor="white" border="3px solid" width="100%" height="10vh" onClick={() => onClick(1)}>{stage.selections[1].title}</Button>
      </Box>
    </Box>
  )
}

export default GameViewTP
