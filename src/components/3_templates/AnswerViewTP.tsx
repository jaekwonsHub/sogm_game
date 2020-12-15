import { Box, Text } from "@chakra-ui/react"
import data from "../../ data";

interface IAnswerViewTPProps {
  onClick?: any;
  id: string;
}


const AnswerViewTP: React.FC<IAnswerViewTPProps> = ({ id }) => {
  const stage = data.stages.filter(e => e.id === id)[0];

  return (
    <Box display="flex" height="97vh" flexDir="column" alignItems="center" justifyContent="center" bgColor="#003366">
      <Box width="80%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop={["35px", "35px", "60px", "60px"]}>
        <Text fontSize={["35px", "45px", "50xp", "60px"]} margin="" marginBottom={["10px", "10px", "10px", "10px"]} color="#ffffff">Q{stage.stage}</Text>
        <Text fontSize={["20px", "45px", "50xp", "60px"]} margin="" color="#ffffff">{stage.question[0]}</Text>
        <Text fontSize={["20px", "45px", "50xp", "60px"]} margin={["10px", "10px", "20px", "20px"]} color="#ffffff">{stage.question[1]}</Text>
        <Text fontSize={["20px", "45px", "50xp", "60px"]} margin="" color="#ffffff">{stage.question[2]}</Text>
        <Box width="100%" height="50vh" marginTop="40px" border="3px solid" display="flex" flexDir="column" alignItems="center" bgColor="#ffffff">
          <Box height="20vh" display="flex" flexDir="column" justifyContent="flex-end" alignItems="center">
            <Text fontSize={["15px", "18px", "20xp", "25px"]}>정답은</Text>
          </Box>
          <Box width="100%" height="25vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text margin="" fontSize={["20px", "25px", "30xp", "40px"]}>{stage.selections.filter(e => e.isCorrect === true)[0].title}</Text>
          </Box>
          <Box width="80%" border="1px dashed" />
          <Box width="70%" height="60vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text fontSize={["16px", "20px", "25xp", "30px"]} marginTop="30px">{stage.answer}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AnswerViewTP