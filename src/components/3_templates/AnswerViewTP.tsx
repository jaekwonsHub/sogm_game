import { Box, Text } from "@chakra-ui/react"
import data from "../../ data";

interface IAnswerViewTPProps {
  onClick?: any;
  id: string;
}


const AnswerViewTP: React.FC<IAnswerViewTPProps> = ({ id }) => {
  const stage = data.stages.filter(e => e.id === id)[0];

  return (
    <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" bgColor="#003366">
      <Box width="80%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop="30px">
        <Text fontSize="80px" margin="" color="#ffffff">Q{stage.stage}</Text>
        <Text fontSize="30px" margin="" color="#ffffff">{stage.question[0]}</Text>
        <Text fontSize="30px" margin="20px" color="#ffffff">{stage.question[1]}</Text>
        <Text fontSize="30px" margin="" color="#ffffff">{stage.question[2]}</Text>
        <Box width="80%" height="50vh" border="1px solid" display="flex" flexDir="column" alignItems="center" bgColor="#ffffff">
          <Box height="20vh" display="flex" flexDir="column" justifyContent="flex-end" alignItems="center">
            <Text fontSize="20px">정답은</Text>
          </Box>
          <Box height="30vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text margin="" fontSize="30px">{stage.selections.filter(e => e.isCorrect === true)[0].title}</Text>
          </Box>
          <Box width="80%" border="1px dashed" />
          <Box width="70%" height="60vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text fontSize="20px" marginTop="30px">{stage.answer}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AnswerViewTP