import AnswerViewTP from "../3_templates/AnswerViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"
import { useState } from "react"


interface IIdParams {
  id: string;
}

const Answer: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  const nextId = parseInt(match.params.id) + 1
  const history = useHistory();
  // const [count, setCount] = useState()

  setTimeout((...args) => history.push(`/game/${nextId}`), 5000);
  //setInterval()
  return (
    <AnswerViewTP id={id} />
  )
}
export default Answer