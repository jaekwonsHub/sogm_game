import GameViewTP from "../3_templates/GameViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"
import LoadingView from "./Loading"
import data from "../../ data"

interface IIdParams {
  id: string;
  selected?: string;
}

const Game: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  const history = useHistory();
  const stage = data.stages.filter(e => e.id === id)[0];

  if (parseInt(id) !== 7) {
    const onClick = (index: any) => {
      const correct = stage.selections[index].isCorrect
      history.push(`/answer/${id}?isCorrect=${correct}`)
      if (correct === '0') {
        data.correctCount += 1;
      }
    }
    return (
      <GameViewTP
        id={id}
        onClick={onClick}

      />
    )
  } else {
    return (
      <LoadingView />
    )
  }
}
export default Game