import React from "react"
import HomeTP from "../3_templates/HomeTP"
import { useHistory } from "react-router-dom"


const Home = () => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/game/0`)
    const audio = document.getElementById('bgm_question') as HTMLAudioElement
    if (audio) {
      audio.play()
    }
  }

  return (

    <HomeTP onClick={onClick} />
  )
}
export default Home