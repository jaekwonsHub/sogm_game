import GameViewTP from "../3_templates/GameViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"
import LoadingView from "./Loading"
import { useState } from "react"


interface IIdParams {
  id: string;
  selected?: string;
}

const Game: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  console.log(id)
  const history = useHistory();
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState();

  if (parseInt(id) !== 7) {
    const onClick = () => {
      history.push(`/answer/${id}`)

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