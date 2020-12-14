import LoadingViewTP from "../3_templates/LoadingViewTP"
import { useHistory } from "react-router-dom"

const Loading = () => {
  const history = useHistory();
  setTimeout((...args) => history.push(`/result`), 5000);

  return (
    <LoadingViewTP />
  )
}
export default Loading