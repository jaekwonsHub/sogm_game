import { Box, Button } from "@chakra-ui/react"
import { FunctionComponent } from "react"

interface IButtonFormProps {
  onClick?: any;
}
const ButtonForm: FunctionComponent<IButtonFormProps> = ({ children, onClick }) => {
  return (
    <Box width="70%" display="flex" justifyContent="center" onClick={onClick}>
      <Button bgColor="white" border="2px solid" borderColor="#707070" margin="40px" width="50%" height="7vh" color="#707070">{children}</Button>
    </Box>
  )
}
export default ButtonForm