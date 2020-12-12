import AnswerViewTP from "../3_templates/AnswerViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"


interface IIdParams {
  id: string;
}

const AnswerView: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  const nextId = parseInt(match.params.id) + 1
  const history = useHistory();
  const nextQuestion = setTimeout((...args) => history.push(`/game/${nextId}`), 5000);
  return (
    <AnswerViewTP
      id={id}
    >
      {nextQuestion}
    </AnswerViewTP>
  )
}
export default AnswerView