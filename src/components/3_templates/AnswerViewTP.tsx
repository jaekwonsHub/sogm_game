import { Image, Box, Text } from "@chakra-ui/react"
import data from "../../ data";

interface IAnswerViewTPProps {
  onClick?: any;
  id: string;
  isCorrect?: string;
}


const AnswerViewTP: React.FC<IAnswerViewTPProps> = ({ id, onClick, isCorrect }) => {
  const stage = data.stages.filter(e => e.id === id)[0];

  return (
    <Box display="flex" height="100vh" flexDir="column" alignItems="center" justifyContent="center" bgColor={isCorrect === "0" ? "#003366" : "#77274C"}>
      <Box width="84%" height="100vh" maxW="720px" display="flex" flexDir="column" alignItems="center" justifyContent="flex-start" paddingTop={["35px", "35px", "60px", "60px"]}>
        {
          isCorrect === "0" ?
            (<Text paddingTop="7vh" height="20vh" fontSize={["55px", "60px", "65xp", "75px"]} fontWeight={700} margin="" marginBottom="10px" color="#ffffff" >
              정답!
            </Text>
            ) :
            (<Text paddingTop="7vh" height="20vh" fontSize={["55px", "60px", "65xp", "75px"]} fontWeight={700} margin="" marginBottom="10px" color="#ffffff" >
              ...땡!
            </Text>)
        }
        <Box position="relative" width="100%" height="60vh" marginTop="15px" border="5px solid" display="flex" flexDir="column" alignItems="center" bgColor="#ffffff">
          <Image top="-45px" left="30px" position="absolute" width="20%" src={process.env.PUBLIC_URL + "/images/angel.png"} />
          <Box height="20vh" marginBottom="1vh" display="flex" flexDir="column" justifyContent="flex-end" alignItems="center">
            <Text fontWeight="500" fontSize={["20px", "25px", "30xp", "35px"]}>정답은</Text>
          </Box>
          <Box width="100%" marginBottom="5vh" height="25vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text margin="" fontWeight="700" fontSize={["28px", "32px", "36xp", "40px"]}>{stage.selections.filter(e => e.isCorrect === "0")[0].title[0]}</Text>
            <Text margin="" fontWeight="700" fontSize={["28px", "32px", "36xp", "40px"]}>{stage.selections.filter(e => e.isCorrect === "0")[0].title[1]}</Text>
          </Box>
          <Box width="80%" border="1px dashed" />
          <Box width="75%" height="55vh" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Text fontSize={[15, 20, 23, 30]} fontWeight={500} marginTop="2vh">{stage.answer[0]}</Text>
            <Text fontSize={[15, 20, 23, 30]} fontWeight={500} marginTop="">{stage.answer[1]}</Text>
            <Text fontSize={[15, 20, 23, 30]} fontWeight={500} marginTop="">{stage.answer[2]}</Text>
            <Text fontSize={[15, 20, 23, 30]} fontWeight={500} marginTop="">{stage.answer[3]}</Text>
          </Box>
          <Box width="80%" border="1px dashed" />
          <Box height="25vh">
            <Box onClick={onClick} fontWeight="600" marginTop="3vh" fontSize={["20px", "23px", "25xp", "30px"]} bgColor="#ffffff" border="" color={isCorrect === "0" ? "#003366" : "#77274C"}>터치하여 넘기기</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AnswerViewTP