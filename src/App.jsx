import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Contact  from "./Components/Contact/Contact"

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"Your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]
  const [heroCount, setHeroCount] = useState(1)
  const [playStatus, setPlayStatus] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) =>{return count ===2?0: count+1})
      
    }, 3000);
  }, [])
  
  return (
    <div>
      <Background playStatus={playStatus} heroCount = {heroCount} />
      <Router>
            <Navbar />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                {/* Add other routes here */}
            </Routes>
        
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount} 
          setHeroCount={setHeroCount}
          playStatus={playStatus} 
        />

      </div>
    </Router>
  )
}

export default App