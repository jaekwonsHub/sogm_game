import GameViewTP from "../3_templates/GameViewTP"
import { useHistory } from "react-router-dom"

const GameView = () => {
  const history = useHistory();
  return (
    <GameViewTP
      onClick={() => { history.push("/answer/") }}
    />
  )
}
export default GameView