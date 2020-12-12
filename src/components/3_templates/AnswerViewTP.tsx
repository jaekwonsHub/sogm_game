import { Box, Text } from "@chakra-ui/react"
import data from "../../ data";

interface IAnswerViewTPProps {
  onClick?: any;
  id: string;
}


const AnswerViewTP: React.FC<IAnswerViewTPProps> = ({ id }) => {
  const stage = data.stages.filter(e => e.id === id)[0];

  return (
    <Box width="100%" height="100vh" maxW="1000px" display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Text fontSize="80px" margin="">Q{stage.stage}</Text>
      <Text fontSize="30px" margin="20px">{stage.question}</Text>
      <Box>
        <Text>정답은</Text>
        <Text>{stage.selections.filter(e => e.isCorrect === true)[0].title}</Text>
        <Text>{stage.answer}</Text>
      </Box>
    </Box>
  )
}

export default AnswerViewTP