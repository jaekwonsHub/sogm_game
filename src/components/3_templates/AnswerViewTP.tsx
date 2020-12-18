import { Box, Text } from "@chakra-ui/react"
import { useState } from "react";
import data from "../../ data";

interface IAnswerViewTPProps {
  onClick?: any;
  id: string;
  isCorrect?: string;
}


const AnswerViewTP: React.FC<IAnswerViewTPProps> = ({ id, onClick, isCorrect }) => {
  const stage = data.stages.filter(e => e.id === id)[0];

  return (
    <Box display="flex" height="97vh" flexDir="column" alignItems="center" justifyContent="center" bgColor={isCorrect === "0" ? "#003366" : "#77274C"}>
      <Box width="80%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop={["35px", "35px", "60px", "60px"]}>
        {
          isCorrect === "0" ?
            (<Text paddingTop="30px" height="15vh" fontSize={["50px", "55px", "65xp", "75px"]} fontWeight={700} margin="" marginBottom="10px" color="#ffffff" >
              정답!
            </Text>
            ) :
            (<Text paddingTop="30px" height="15vh" fontSize={["50px", "55px", "65xp", "75px"]} fontWeight={700} margin="" marginBottom="10px" color="#ffffff" >
              ...땡!
            </Text>)
        }
        <Box width="100%" height="55vh" marginTop="15px" border="3px solid" display="flex" flexDir="column" alignItems="center" bgColor="#ffffff">
          <Box height="20vh" display="flex" flexDir="column" justifyContent="flex-end" alignItems="center">
            <Text fontSize={["15px", "18px", "20xp", "25px"]}>정답은</Text>
          </Box>
          <Box width="100%" height="25vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text margin="" fontWeight="700" fontSize={["20px", "25px", "30xp", "40px"]}>{stage.selections.filter(e => e.isCorrect === "0")[0].title[0]}</Text>
            <Text margin="" fontWeight="700" fontSize={["20px", "25px", "30xp", "40px"]}>{stage.selections.filter(e => e.isCorrect === "0")[0].title[1]}</Text>
          </Box>
          <Box width="80%" border="1px dashed" />
          <Box width="70%" height="55vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text fontSize={["11px", "22px", "25xp", "30px"]} fontWeight="700" marginTop="30px">{stage.answer[0]}</Text>
            <Text fontSize={["11px", "22px", "25xp", "30px"]} fontWeight="700" marginTop="">{stage.answer[1]}</Text>
            <Text fontSize={["11px", "22px", "25xp", "30px"]} fontWeight="700" marginTop="">{stage.answer[2]}</Text>
            <Text fontSize={["11px", "22px", "25xp", "30px"]} fontWeight="700" marginTop="">{stage.answer[3]}</Text>
          </Box>
          <Box width="80%" border="1px dashed" />
          <Box height="25vh">
            <Box onClick={onClick} marginTop="20px" fontSize={["17px", "22px", "25xp", "30px"]} bgColor="#ffffff" border="" color={isCorrect === "0" ? "#003366" : "#77274C"}>터치하여 넘기기</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AnswerViewTP