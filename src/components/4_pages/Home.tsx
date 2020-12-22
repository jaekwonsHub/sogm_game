import React from "react"
import HomeTP from "../3_templates/HomeTP"
import { useHistory } from "react-router-dom"


const Home = () => {
  const history = useHistory();

  const onClick = () => {
    const audio = document.getElementById('bgm_question') as HTMLAudioElement
    if (audio) {
      audio.play()
    }
    history.push(`/game/0`)

  }
  return (

    <HomeTP onClick={onClick} />
  )
}
export default Home