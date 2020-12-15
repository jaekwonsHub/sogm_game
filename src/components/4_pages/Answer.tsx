import AnswerViewTP from "../3_templates/AnswerViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"

interface IIdParams {
  id: string;
}

const Answer: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  const nextId = parseInt(match.params.id) + 1
  const history = useHistory();

  // setTimeout((...args) => history.push(`/game/${nextId}`), 5000);

  return (
    <AnswerViewTP id={id} />
  )
}
export default Answer