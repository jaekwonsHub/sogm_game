import GameViewTP from "../3_templates/GameViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"

interface IIdParams {
  id: string;
}

const GameView: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  console.log(id)
  const history = useHistory();
  if (parseInt(id) !== 7) {
    return (
      <GameViewTP
        id={id}
        onClick={() => { history.push(`/answer/${id}`) }}
      />
    )
  } else {
    return (
      <div>Loading</div>
    )
  }
}
export default GameView