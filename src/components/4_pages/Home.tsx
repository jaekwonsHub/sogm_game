import React from "react"
import HomeTP from "../3_templates/HomeTP"
import { RouteComponentProps, useHistory } from "react-router-dom"

interface IIdParams {
  id: string;
}


const HomePage: React.FC<RouteComponentProps<IIdParams>> = ({ match }) => {
  const id = match.params.id
  console.log(id)
  const history = useHistory();
  return (
    <HomeTP onClick={() => { history.push(`/game/0`) }} />
  )
}
export default HomePage