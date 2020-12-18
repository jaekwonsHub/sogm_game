import AnswerViewTP from "../3_templates/AnswerViewTP"
import { RouteComponentProps, useHistory } from "react-router-dom"

interface IIdParams {
  id: string;
}

const Answer: React.FC<RouteComponentProps<IIdParams>> = ({ match, location }) => {
  const id = match.params.id
  const nextId = parseInt(match.params.id) + 1
  const history = useHistory();
  const fullText = location.search
  const isCorrect = location.search.charAt(fullText.length - 1);

  const onClick = () => {
    history.push(`/game/${nextId}`)
  }
  return (
    <AnswerViewTP id={id} isCorrect={isCorrect} onClick={onClick} />
  )
}
export default Answer