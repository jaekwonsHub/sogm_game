import HomeTP from "../3_templates/HomeTP"
import { useHistory } from "react-router-dom"

const HomePage = () => {
  const history = useHistory();
  return (
    <HomeTP onClick={() => { history.push("/game") }} />
  )
}
export default HomePage