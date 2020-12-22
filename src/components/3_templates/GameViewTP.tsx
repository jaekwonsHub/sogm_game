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
  return (
    <Box width="100%" height="100vh" display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#006620">
      <Box width="84%" height="100vh" maxW="500px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop="2vh">
        <Text fontSize={["50px", "55px", "65px", "65px"]} fontWeight="500" margin="" color="#ffffff">Q{stage.stage}</Text>
        <Text fontSize={["20px", "45px", "50px", "50px"]} fontWeight="600" margin="" color="#ffffff" lineHeight="80%">{stage.question[0]}</Text>
        <Text fontSize={["20px", "45px", "50px", "50px"]} fontWeight="600" margin="" color="#ffffff">{stage.question[1]}</Text>
        <Text fontSize={["20px", "45px", "50px", "50px"]} fontWeight="600" margin="" color="#ffffff">{stage.question[2]}</Text>
        <Image fallbackSrc="https://via.placeholder.com/150?text=CHRISTMAS TEST" border="5px solid #023014" maxW="500px" marginTop="20px" width="100%" src={process.env.PUBLIC_URL + `/images/questions/question${stage.stage}.png`} />
        <Button maxW="600px" borderRadius="" fontSize={[16, 20, 23, 30]} bgColor="white" border="5px solid #023014" width="100%" height="15vw" marginTop="3vh" marginBottom="1vh" onClick={() => onClick(0)} display="flex" flexDir="column">
          {stage.selections[0].title.map(text => <Text key={text + '-text-id'} margin="">{text}</Text>)}
        </Button>
        <Button maxW="600px" borderRadius="" fontSize={[16, 20, 23, 30]} bgColor="white" border="5px solid #023014" width="100%" height="15vw" onClick={() => onClick(1)}>{stage.selections[1].title}</Button>
      </Box>
    </Box>
  )
}

export default GameViewTP
