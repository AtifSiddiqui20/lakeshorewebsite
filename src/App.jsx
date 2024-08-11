import { useState } from "react"
import Background from "./components/Background/Background"

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(1)
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount = {heroCount} />
    </div>
  )
}

export default App