import { Text, Box, Button } from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface IButtonFormProps {
  onClick?: any;
}
const ButtonForm: FunctionComponent<IButtonFormProps> = ({ children, onClick }) => {
  return (
    <Box marginBottom="5vh" width="100%" maxW="720px" display="flex" justifyContent="center" onClick={onClick}>
      <Button bgColor="white" borderRadius="" border="5px solid" borderColor="#000000" marginTop="5vh" width="65%" height="11vh" >
        <Text color="#000000" fontSize={[20, 23, 27, 30]} fontWeight={500}>{children}</Text>
      </Button>
    </Box>
  )
}
export default ButtonForm