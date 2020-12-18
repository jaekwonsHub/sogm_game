import { Box, Button } from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface IButtonFormProps {
  onClick?: any;
}
const ButtonForm: FunctionComponent<IButtonFormProps> = ({ children, onClick }) => {
  return (
    <Box width="100%" display="flex" justifyContent="center" onClick={onClick}>
      <Button bgColor="white" border="4px solid" borderColor="#000000" margin="40px" width="65%" height="10vh" color="#000000" fontSize="17px">{children}</Button>
    </Box>
  )
}
export default ButtonForm