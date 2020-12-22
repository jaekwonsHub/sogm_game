import ResultTP from "../3_templates/ResultTP"

const Result = () => {
  {
    const audio1 = document.getElementById('bgm_question') as HTMLAudioElement
    const audio2 = document.getElementById('bgm_result') as HTMLAudioElement
    if (audio1) {
      audio1.pause()
      audio1.remove()
    }
    if (audio2) {
      audio2.load()
      audio2.addEventListener('canplay', () => {
        audio2.play()
      })
    }
  }
  return (
    <ResultTP />
  )
}
export default Result