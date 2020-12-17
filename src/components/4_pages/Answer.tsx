import AnswerViewTP from "../3_templates/AnswerViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"
import data from "../../ data"
interface IIdParams {
  id: string;
}

const Answer: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  const nextId = parseInt(match.params.id) + 1
  const history = useHistory();
  const stage = data.stages.filter(e => e.id === id)[0];
  return (
    <AnswerViewTP id={id} onClick={() => (history.push(`/game/${nextId}`))} />
  )
}
export default Answer