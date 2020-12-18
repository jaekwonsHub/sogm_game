import React from "react"
import HomeTP from "../3_templates/HomeTP"
import { useHistory } from "react-router-dom"

const Home = () => {
  const history = useHistory();
  return (
    <HomeTP onClick={() => { history.push(`/game/0`) }} />
  )
}
export default Home